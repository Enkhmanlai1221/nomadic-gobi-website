import Image from "next/image";

export default function SixthSection() {

    const data = [
        {
            title: "Phone Number",
            icon: "/icon/phone.png",
            description: "99003171, 88082375",
        },
        {
            title: "Email Adress",
            icon: "/icon/email.png",
            description: "dungenee@yahoo.com",
        },
        {
            title: "Facebook",
            icon: "/icon/facebook.png",
            description: "Dungenee Tourist Camp",
        },
    ]

    return (
        <section className="max-w-7xl mx-auto px-6">
            <p className="text-3xl font-bold text-center mb-8">Contact Düngenee Tourist Camp</p>
            <p className="text-center mb-8">Dungenee Tourist Camp is located near Dungenee Am, Gobi Gurvan Saikhan National Park, Umnugovi province, Mongolia. Only a short drive from Dalanzadgad town, and surrounded by natural wonders like Yolyn Am and Bayanzag.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.map((item) => (
                    <div key={item.title} className="flex flex-col justify-between gap-2 items-center text-center p-4 rounded-lg">
                        <Image src={item.icon} alt={item.title} width={60} height={60} />
                        <div className="flex flex-col items-center text-center">
                            <p className="text-lg font-bold">{item.title}</p>
                            <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
}