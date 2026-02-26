"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface CarouselProps {
    images: string[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
    limit?: number;
    isMonument?: boolean;
}

export function Carosuel({
    images,
    autoPlay = false,
    autoPlayInterval = 5000,
    limit = 4, // Grid CSS дээр 4 багана байгаа тул энд default-ийг 4 болгох нь зүйтэй (эсвэл props-оор 4 гэж дамжуулаарай)
    isMonument = false,
}: CarouselProps) {
    const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
    const [currentIndex, setCurrentIndex] = useState(0);
    // imageLoading-ийг index-ээр нь хянах тул object эсвэл том array ашиглана
    const [imageLoading, setImageLoading] = useState<Record<number, boolean>>({});
    const [mainImageLoading, setMainImageLoading] = useState(true);

    useEffect(() => {
        if (!autoPlay || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, images.length]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const handleMainImageLoad = () => {
        setMainImageLoading(false);
    };

    // Loading state-ийг үндсэн индексээр нь хадгална
    const handleThumbnailLoad = (index: number) => {
        setImageLoading((prev) => ({
            ...prev,
            [index]: false, // Loaded (loading is false)
        }));
    };

    const handleMainImageError = () => {
        setMainImageLoading(false);
    };

    const handleThumbnailError = (index: number) => {
        setImageLoading((prev) => ({
            ...prev,
            [index]: false,
        }));
    };

    if (!images || images.length === 0) {
        return (
            <div
                className={`flex items-center justify-center rounded-lg ${isMonument ? "aspect-[3/4]" : "aspect-video"
                    }`}
            >
                <p className="text-gray-500">No images available</p>
            </div>
        );
    }

    // --- ШИНЭ ЛОГИК ЭХЛЭЛ ---
    // Харагдах зургуудын эхлэх цэгийг тооцоолох
    let start = 0;
    if (images.length > limit) {
        // CurrentIndex-ийг голлуулах гэж оролдоно
        start = currentIndex - Math.floor(limit / 2);

        // Эхлэл болон төгсгөлөөс хэтрэхгүй байх нөхцөлүүд
        if (start < 0) start = 0;
        if (start + limit > images.length) start = images.length - limit;
    }

    // Зөвхөн харагдах хэсгийг тасдаж авахдаа originalIndex-ийг хадгалж авна
    const thumbnailImages = images
        .map((src, idx) => ({ src, originalIndex: idx }))
        .slice(start, start + limit);
    // --- ШИНЭ ЛОГИК ТӨГСГӨЛ ---

    return (
        <div className="w-full space-y-4">
            {/* Main Image Section - Хэвээрээ */}
            <div
                className={`relative overflow-hidden rounded-lg group ${isMonument ? "aspect-[3/4]" : "aspect-video"
                    }`}
            >
                {!loadedImages[currentIndex] && (
                    <div className="absolute inset-0 z-10">
                        <div className={`animate-pulse bg-gray-300 rounded-lg w-full h-full rounded-2xl`}>
                            <div className="flex items-center justify-center h-full">
                                <div
                                    className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 w-10 h-10`}
                                />
                            </div>
                        </div>
                    </div>
                )}
                <div
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300 ${mainImageLoading ? "opacity-0" : "opacity-100"
                        }`}
                    style={{
                        backgroundImage: `url(${images[currentIndex]})`,
                    }}
                />
                <Image
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    fill
                    className="opacity-0"
                    onLoad={handleMainImageLoad}
                    onError={handleMainImageError}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    priority={currentIndex < 4}
                    onLoadingComplete={() =>
                        setLoadedImages((prev) => ({
                            ...prev,
                            [currentIndex]: true,
                        }))
                    }
                />
                {/* Navigation Buttons - Хэвээрээ */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </>
                )}

                {/* Dots - Хэвээрээ */}
                {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? "w-8 bg-white"
                                    : "bg-white/50 hover:bg-white/75"
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Thumbnails Section - ӨӨРЧЛӨГДСӨН */}
            {images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                    {/* grid-cols-3 md:grid-cols-4 гэдгийг шууд grid-cols-4 болгох эсвэл limit-тайгаа уялдуулах хэрэгтэй */}

                    {thumbnailImages.map(({ src, originalIndex }, index) => (
                        <button
                            key={originalIndex} // Index биш originalIndex-ийг key болгоно
                            onClick={() => goToSlide(originalIndex)}
                            className={`relative overflow-hidden rounded-lg transition-all duration-300 ${isMonument ? "aspect-[3/4]" : "aspect-video"
                                } ${originalIndex === currentIndex
                                    ? "ring-4 ring-blue-400"
                                    : "ring-1 ring-gray-300"
                                }`}
                        >
                            {/* Loading логикийг originalIndex-ээр шалгана */}
                            {imageLoading[originalIndex] !== false && (
                                <div className={`animate-pulse bg-gray-300 rounded-lg w-full h-full rounded-2xl`}>
                                    <div className="flex items-center justify-center h-full">
                                        <div
                                            className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 w-10 h-10`}
                                        />
                                    </div>
                                </div>
                            )}

                            <Image
                                src={src}
                                alt={`Thumbnail ${originalIndex + 1}`}
                                fill
                                className={`object-cover transition-opacity duration-300 ${
                                    // Эхлээд true гэж үзээд ачааллаж дуусмагц false болгоно
                                    imageLoading[originalIndex] !== false
                                        ? "opacity-0"
                                        : "opacity-100"
                                    }`}
                                sizes="(max-width: 768px) 25vw, (max-width: 1024px) 16vw, 12vw"
                                onLoad={() => handleThumbnailLoad(originalIndex)}
                                onError={() => handleThumbnailError(originalIndex)}
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
