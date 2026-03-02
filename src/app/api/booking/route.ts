import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const TO_EMAIL = "mares0536@gmail.com";

export async function POST(request: NextRequest) {
    try {
        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json(
                { error: "RESEND_API_KEY тохируулаагүй байна. .env.local файлд нэмнэ үү." },
                { status: 500 }
            );
        }

        const body = await request.json();
        const { firstname, lastname, phone, email } = body;

        if (!firstname || !lastname || !phone || !email) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const { data, error } = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
            to: TO_EMAIL,
            replyTo: email,
            subject: `Booking Inquiry from ${firstname} ${lastname}`,
            html: `
                <h2>New Booking Inquiry</h2>
                <p><strong>Firstname:</strong> ${escapeHtml(firstname)}</p>
                <p><strong>Lastname:</strong> ${escapeHtml(lastname)}</p>
                <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            `,
        });

        if (error) {
            const errMsg = typeof error === "object" && error !== null && "message" in error
                ? String((error as { message: string }).message)
                : String(error);
            return NextResponse.json({ error: errMsg }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (err) {
        const message = err instanceof Error ? err.message : "Имэйл илгээхэд алдаа гарлаа";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

function escapeHtml(text: string): string {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}
