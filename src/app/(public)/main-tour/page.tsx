"use client";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    useDisclosure
} from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Clock,
    Compass,
    XCircle
} from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";

const FALLBACK_CARD_IMAGE = "/main-tour/placeholder.jpg";
const FALLBACK_DAY_IMAGE = "/main-tour/placeholder-day.jpg";

const toursData = [
    {
        id: 1,
        title: "Grand Mongolia Expedition",
        subtitle: "Gobi Desert + Central & Northern Mongolia",
        days: 21,
        category: "All Regions",
        image: "/main-tour/tsagaansuvarga.jpg",
        overview: "This journey is a deep exploration of Mongolia, combining the dramatic landscapes of the Gobi Desert, the rich history of Central Mongolia, and the untouched wilderness of Northern Mongolia. You will experience desert dunes, canyons, ancient capitals, volcanic areas, beautiful lakes, and unique ethnic cultures. Highlights include camel riding in the Gobi, visiting ancient monasteries, staying with nomadic families, and a horse trek to the Reindeer Herders (Tsaatan people).The tour is designed at a relaxed pace, allowing time to enjoy nature, local life, and photography, while staying in a mix of tourist camps, guesthouses, and nomadic family homes. ",
        includes: ["Transfers", "English Guide", "All Accommodations", "All Meals", "Private Vehicle", "Horse/Camel Riding", "Entrance Fees", "Sleeping Bags"],
        excludes: ["Travel Insurance", "UB Accommodation", "Alcohol", "Personal Expenses"],
        itinerary: [
            { day: 1, title: "Arrival in Ulaanbaatar → City Tour", desc: "Our guide and driver will meet you at the airport and transfer you to the hotel. Depending on arrival time, enjoy a short city tour — visit Sukhbaatar Square, Gandantegchinlen Monastery, and the new Chinggis Khan Museum, followed by a welcome dinner. Overnight at the hotel.", image: "/main-tour/ulaanbaatar.jpg" },
            { day: 2, title: "Chinggis Statue & Middle Gobi", desc: "After leaving Ulaanbaatar, we visit the famous Chinggis Khaan Equestrian Statue at Tsonjin Boldog, the largest horse statue in the world. You can go up to the viewpoint for panoramic scenery. We then drive to Baga Gazriin Chuluu, a beautiful granite rock formation in the Middle Gobi, known for its strange shapes, wide valleys, and quiet atmosphere. Discover the ruins of a hidden 17th-century monastery, explore unique rock formations, and visit a natural spring known for its crystal-clear water. This day is all about connecting with nature and recharging your spirit in this enchanting landscape.Overnight: At ger camp (proper toilet and hot shower).", image: "/main-tour/chenghis.jpg" },
            {
                day: 3, title: "Tsagaan Suvarga (White Stupa)", desc: "Journey southward into the heart of the Gobi Desert to reach Tsagaan Suvarga, a mesmerizing natural wonder where colorful cliffs rise dramatically from the earth, resembling the ruins of an ancient city. The vibrant layers of sediment create a visual feast. Tsagaan Suvarga is a stunning escarpment shaped by wind and water over millions of years. Its colorful layers look like ancient ruins or a giant white fortress.This area is perfect for walking, photography, and enjoying the vast Gobi landscape. Overnight: Local ger camp with hot shower facilities.", image: "/main-tour/tsagaansuvarga.jpg"
            },
            { day: 4, title: "Yolyn Am (Vulture Valley)", desc: "We travel to Yolyn Am in Gobi Gurvansaikhan National Park. This deep canyon is famous for its ice fields that can remain even in summer. You will walk through the narrow gorge surrounded by high cliffs and see unique wildlife and beautiful scenery.", image: "/main-tour/yolynam.jpg" },
            { day: 5, title: "Khongor Sand Dunes", desc: "Khongor Sand Dunes are the largest and most impressive dunes in Mongolia. They stretch for hundreds of kilometers and can reach up to 300 meters high. The dunes are known for the humming sound they make when the sand moves.", image: "/main-tour/sanddunes.jpg" },
            { day: 6, title: "Camel Riding & Sunset", desc: "Today you enjoy a camel ride with local nomads. You can climb the sand dunes for amazing views and watch the sunset over the Gobi, one of the most memorable experiences of the tour.", image: "/main-tour/thousandcamel.jpg" },
            { day: 7, title: "Bayanzag & Ongi Monastery", desc: "Bayanzag (Flaming Cliffs) is world-famous for dinosaur fossils discovered in the 1920s. The red cliffs glow beautifully at sunset. You can walk through the area, learn about its history, and enjoy the unique desert scenery. Then we continue our travel north to the Ongi River, where the ruins of the once-magnificent Ongi Monastery stand as a testament to Mongolia’s Buddhist heritage. Take in the tranquil river views while learning about the monastery's rich history, and relish the peaceful environment that surrounds this historical site. Overnight: Local ger camp with proper toilet and hot shower.", image: "/main-tour/bayanzag.jpg" },
            { day: 8, title: "Orkhon Waterfall", desc: "Known as Ulaan Tsutgalan (Red Confluence) and is Mongolia's largest waterfall. The Orkhon Waterfall (Ulaan Tsutgalan) in Mongolia is a stunning natural wonder formed by volcanic eruptions and earthquakes, dropping about 20 meters into a basalt canyon, creating dramatic scenery ideal for hiking, horseback riding, and photography, and is a key feature within the UNESCO-listed Orkhon Valley, offering a glimpse into nature and nomadic culture.Formed approximately 20,000 years ago from volcanic activity and earthquakes that created thick basalt layers. The water flows over black basalt rock, creating white waves, and the surrounding landscape is characterized by rocky canyons and lush valleys in summer.Overnight: Local ger camp with proper toilet and hot shower", image: "/main-tour/orkhon.jpg" },
            { day: 9, title: "Kharkhorin Ancient Capital", desc: "Continue to Kharkhorin, the ancient capital of the Mongol Empire. Kharkhorin (formerly Karakorum) in Mongolia was the 13th-century capital of the vast Mongol Empire, a major Silk Road hub, and is now a historic town in the Orkhon Valley (a UNESCO site) known for Erdene  Zuu Monastery, the first Buddhist monastery in Mongolia,  Founded by Ögedei Khan, son of Genghis Khan, it served as the political and economic heart of the Mongol Empire, connecting East and West. Attracted merchants, artisans, and diplomats from across the world, becoming a vibrant cultural melting pot. Destroyed by Ming Dynasty forces in the late 14th century, leading to its abandonment Erdene Zuu Monastery: Built from the ruins of the ancient city in 1585, it's a stunning complex of temples surrounded by 108 stupas, showcasing Mongolian Buddhist art. Karakorum Museum: Displays artifacts from the Mongol Empire, providing context to the ancient capital. Overnight: Local ger camp with proper toilet and hot shower.", image: "/main-tour/kharkhorum.jpg" },
            { day: 10, title: "White Lake (Terkhiin Tsagaan)", desc: "Drive to TerkhiinTsagaan Lake, a beautiful freshwater lake formed by volcanic activity. Terkhiin Tsagaan Nuur is a large freshwater lake located in the Khangai Mountains of central Mongolia, protected within the Khorgo-Terkhiin Tsagaan Nuur National Park. The lake was formed thousands of years ago when a massive lava flow from the nearby Khorgo volcano dammed the Terkh River. It sits at an altitude of over 2,000 meters and is approximately 16 kilometers long and 4 to 10 kilometers wide.The area is a protected national park, essential for its biodiversity, which includes various fish species This freshwater lake is surrounded by volcanic mountains and open steppe. It is a peaceful place for walking, photography, and enjoying nature. Overnight: Local ger camp with proper toilet and hot shower.", image: "/main-tour/terkhiintsagaan.jpg" },
            { day: 11, title: "Shine Ider Village", desc: "Continue north to the rural town of Shine Ider, experiencing authentic countryside life and vast open landscapes along the way. Shine-Ider (Шинэ-Идэр) is a scenic district (sum) in Khövsgöl Province, northern Mongolia, known for its rolling hills, pastures, forests, traditional nomadic life, and natural beauty, acting as a key stopover for travelers heading between Khövsgöl and central Mongolia, offering authentic rural experiences near sites like Zuun Nuur lake. It's characterized by vast steppe and forest-steppe landscapes.Overnight: Local ger camp with proper toilet and hot shower.", image: "/main-tour/khorgo.jpg" },
            { day: 12, title: "Murun City", desc: "Murun (or Mörön) is the capital of Mongolia's Khuvsgul Province, a key northern hub serving as a gateway to Lake Khuvsgul and the region's natural wonders, with a mix of essential services, markets, an airport, and paved roads connecting to Ulaanbaatar, offering a base for exploring Mongolia's northern taiga and cultural sites like ancient deer stones. Northern Mongolia, situated on the Delger Muron River.Provincial capital (Aimag center) and main supply point for travelers heading north. Features an airport with regular flights to Ulaanbaatar, paved roads, hospitals, schools, banks, and large markets.This is a good place to rest, resupply, and prepare for the northern adventure.", image: "/main-tour/khorgo.jpg" },
            { day: 13, title: "Nomadic Family Stay", desc: "Ulaan-Uul sum (district) in Khövsgöl Province, Mongolia, is known for its stunning taiga landscapes, rich Darkhad culture, and proximity to reindeer herders (Tsaatan), covering about 10,000 km² with elevations from 1200-3400m, offering cool summers and cold winters, and serving as a gateway for cultural immersion and exploring ancient forests like the Ulaan Taiga. Overnight with a local herder family. You will experience traditional nomadic life, food, and hospitality.", image: "/main-tour/khorgo.jpg" },
            { day: 14, title: "Trek to Tsaatan", desc: "We begin a horse trek into the taiga forest toward the Tsaatan people. The ride takes you through wild and remote landscapes. The Tsaatan (or Dukha) culture is a unique, nomadic way of life centered around reindeer herding in the remote taiga forests of northern Mongolia, with traditions linking back centuries, where they live in teepee-like dwellings (urts) and rely on reindeer for transport, milk, and survival, blending ancient shamanistic beliefs with aspects of modern life, though facing pressures of modernization and declining herd sizes. Overnight near the Tsaatan camp.", image: "/main-tour/khorgo.jpg" },
            { day: 15, title: "Tsaatan Culture", desc: "Today you learn about the daily life, traditions, and reindeer herding culture of the Tsaatan people. This is a rare cultural experience. Reindeer are central to Tsaatan life, providing milk, transportation (better suited to the taiga than horses), hides for shelter, and spiritual connection.They move several times a year (6-8 times) to follow their herds, living in cone-shaped dwellings called urts (or ouke) made from wood and hides/canvas. They are a small, distinct group with Turkic roots, speaking their own Uigur language, though only a few hundred speakers remain. Their culture emphasizes deep respect for nature and a sustainable existence within the challenging taiga environment. Overnight with a local herder family.", image: "/main-tour/khorgo.jpg" },
            { day: 16, title: "Return from Taiga", desc: "We ride back by horse to Ulaan-Uul sum (district) In essence, Ulaan-Uul offers a blend of breathtaking nature and deep cultural immersion, particularly for those interested in Mongolia's nomadic traditions and the unique Tsaatan culture. Overnight with a local herder family.", image: "/main-tour/taiga.jpg" },
            { day: 17, title: "Khuvsgul Lake", desc: "Travel to Khuvsgul Lake, often called the “Blue Pearl of Mongolia.” Enjoy the crystal-clear water and surrounding taiga forest scenery. Khuvsgul Lake (or Khovsgol Nuur) is Mongolia's largest freshwater lake by volume, nicknamed the Blue Pearl located in the north near Russia, known for its deep, clear, drinkable water, surrounded by taiga forests and mountains, holding about 70% of Mongolia's fresh water, rich in fish, birds, and unique flora, and is a sacred site with significant cultural and ecological value, connected to Lake Baikal via the Egiin Gol. Northern Mongolia, near the Russian border, at the foot of the Sayan Mountains. Over 136 km long, 262 meters deep, second-most voluminous freshwater lake in Asia.Extremely clear and pure, holding vast amounts of Mongolia's freshwater. Overnight: Local ger camp near the lake with proper toilet and hot shower.", image: "/main-tour/khuvsgullake.jpg" },
            { day: 18, title: "Return to Murun", desc: "Drive back to Murun city for rest and overnight. Murun is the administrative capital of Khuvsgul Aimag (province) in northern Mongolia and serves as a regional hub. While a transit town, visitors explore the Khuvsgul Province Museum, Danzandarjaa Monastery, local bazaars, and the ancient Uushigin Uvur deer stones nearby. ", image: "/main-tour/murun.jpg" },
            { day: 19, title: "Uran Togoo Volcano", desc: " Drive south to Uran Togoo Volcano, an extinct volcanic crater surrounded by lava fields and forest. The Uran Togoo-Tulga Uul Natural Monument is a national protected area in the Bulgan Province of Mongolia, renowned for its picturesque extinct volcanoes. The area features several extinct volcanoes that were active approximately 20-25 million years ago, including Uran Uul, Tulga Uul, and Jalavch Uul. The fertile soil resulting from ancient lava flows supports rich flora and fauna. Mount Uran Togoo stands at an elevation of approximately 1,686 meters (5,531 feet) above sea level. Its crater is about 500 meters (1,640 feet) in diameter and 50 meters (164 feet) deep.  The center of the crater contains a small, shallow lake, approximately 20 meters wide and 1.5 meters deep, surrounded by dense vegetation including Siberian larches, aspens, and birches. Overnight: Local ger camp.", image: "/main-tour/volcano.jpg" },
            { day: 20, title: "Bayan Nuur Area", desc: "Bayan Nuur soum (district) in Bulgan Province, Mongolia, is known for its rich lake (its name means rich lake), located in northern Mongolia's diverse landscape, featuring steppe, forests, and mountains.", image: "/main-tour/bayannuur.jpg" },
            { day: 21, title: "Return to UB", desc: "We drive back to Ulaanbaatar. Upon arrival, have a farewell dinner together then check in at the hotel and enjoy free time. The following morning, you will be transferred to the airport for your departure. End of the tour.", image: "/main-tour/ulaanbaatar.jpg" }
        ]
    },
    {
        id: 2,
        title: "Altai & Gobi Odyssey",
        subtitle: "Western Mongolia & Gobi Desert Adventure",
        days: 16,
        category: "West & Gobi",
        image: "/main-tour/sanddunes.jpg",
        overview: "This unforgettable journey takes you across the dramatic landscapes of Mongolia, from the snow-capped peaks of the Altai Mountains in the far west to the golden sands of the Gobi Desert in the south. You will experience the authentic nomadic lifestyle of Kazakh eagle hunters, explore ancient caves and glacial valleys, visit crystal-clear lakes, and marvel at the legendary sand dunes of Khongor. Along the way, you will encounter stunning wildlife, prehistoric sites, and vast open steppes under Mongolia’s endless blue sky.",
        includes: ["Domestic Flights", "English Guide", "All Meals", "Private Vehicle", "Permits", "Camping Gear"],
        excludes: ["International Flights", "UB Accommodation", "Alcohol", "Tips"],
        itinerary: [
            { day: 1, title: "Arrival in UB", desc: "Meet your  guide and driver at the airport and transfer to the hotel. Depending on arrival time, enjoy a short city tour — visit Sukhbaatar Square and the Gandantegchinlen Monastery, followed by a welcome dinner. Overnight in Ulaanbaatar." },
            { day: 2, title: "Fly to Bayan-Ulgii", desc: "Take a domestic flight to Bayan-Ölgii, the land of Kazakh nomads and eagle hunters. Visit the Ethnographic Museum and local market to learn about Kazakh culture. Overnight inlocal camp. " },
            { day: 3, title: "Potanin Glacier", desc: "Drive to Altai Tavan Bogd National Park, where Mongolia borders Russia and China. Trek along the Tsagaan Gol (White River) valley and enjoy breathtaking views of Potanin Glacier, the largest in Mongolia. Overnight in ger camp." },
            { day: 4, title: "Khoton & Khurgan Lakes", desc: "Drive to the twin lakes Khoton and Khurgan, surrounded by snow-capped mountains. Visit the Baga Turgen Waterfall, meet Kazakh nomad families, and experience their warm hospitality. Khoton and Khurgan Lakes are beautiful, interconnected glacial lakes in Mongolia's Altai Tavan Bogd National Park, known for their clear waters, stunning scenery, nomadic culture, and fishing, with Baga Turgen Waterfall nearby, a two-tiered glacier-fed waterfall in the Turgen Valley, offering great hiking, photography, and a remote wilderness experience in the Altai Mountains.  Overnight in a Kazakh ger camp." },
            { day: 5, title: "Return to Ulgii", desc: "Drive back to Ölgii, enjoy the mountainous scenery, and visit local craft shops featuring Kazakh embroidery and felt art. Overnight at hotel." },
            { day: 6, title: "Three Blue Caves", desc: "Travel to Khovd Province, home to many ethnic groups such as Kazakh, Uriankhai, and Myangad. Visit the Three Blue Caves, known for ancient rock paintings over 15,000 years old, depicting hunters and wild animals. Overnight in a local guesthouse or tented camping." },
            { day: 7, title: "Gobi-Altai Drive", desc: "Continue the journey through untouched wilderness and scenic mountains. Enjoy the pristine landscapes and visit local nomads. Overnight in a hotel in Gobi-Altai town." },
            { day: 8, title: "Boon Tsagaan Lake", desc: "Visit Boon Tsagaan Lake, one of Mongolia’s largest saline lakes in the Valley of Lakes, home to migratory birds such as swans and cranes. Enjoy nature walks and birdwatching. Overnight in a ger camp." },
            { day: 9, title: "Crystal Cave (Tsagaan Agui)", desc: "Tsagaan Agui (White Cave) in Bayankhongor, Mongolia, is a significant Paleolithic archaeological site in the Gobi Altai Mountains, known for its crystal formations and evidence of human occupation dating back potentially 700,000-800,000 years, making it one of the oldest known sites in the region, with ongoing research revealing rich cultural and environmental history through excavations. The cave contains layers of cultural remains from the Middle and possibly Lower Paleolithic periods, with evidence of human presence for much of the Pleistocene. It's a limestone cave with large, shimmering calcium carbonate crystals, particularly in its chambers, giving it the name White Cave. Excavations have yielded stone tools, fossil remains of extinct animals, and clues about ancient environments, showcasing complex human adaptation in extreme conditions. Situated in the Ikh Bogd range, about 40 km northeast of Bayanlig soum, in the Gobi Desert. The Mongolian government has protected Tsagaan Agui since 1998. Overnight in tents" },
            { day: 10, title: "Khongor Sand Dunes", desc: "Khongoryn Els, or the Singing Sands, are Mongolia's largest and most spectacular sand dunes in the Gobi Desert, famous for the deep humming sound they make in the wind and their breathtaking golden waves rising dramatically from the desert floor. Stretching over 180km long, these massive dunes, part of Gobi Gurvansaikhan National Park, reach up to 300 meters high, offering panoramic views and contrasting with nearby oases nourished by the Khongor River, making them a prime Gobi tourist attraction. Experience camel riding with local nomads, walk to Seruun Bulag (Cool Spring) hidden between the dunes, and climb the golden sand hills to watch a stunning sunset over the Gobi Desert. Overnight: Local ger camp with proper toilet and hot shower." },
            { day: 11, title: "Camel Riding", desc: "Khongoryn Els, or the Singing Sands, are Mongolia's largest and most spectacular sand dunes in the Gobi Desert, famous for the deep humming sound they make in the wind and their breathtaking golden waves rising dramatically from the desert floor. Stretching over 180km long, these massive dunes, part of Gobi Gurvansaikhan National Park, reach up to 300 meters high, offering panoramic views and contrasting with nearby oases nourished by the Khongor River, making them a prime Gobi tourist attraction. Experience camel riding with local nomads, walk to Seruun Bulag (Cool Spring) hidden between the dunes, and climb the golden sand hills to watch a stunning sunset over the Gobi Desert. Overnight: Local ger camp with proper toilet and hot shower." },
            { day: 12, title: "Bayanzag", desc: "Explore Bayanzag, also known as the Flaming Cliffs, a world-famous paleontological site where dinosaur fossils and eggs were first discovered. The red sandstone cliffs glow beautifully at sunset. The name Bayan Zag means rich in saxaul in Mongolian, referring to a thorny shrub that grows in the area. The area was nicknamed the Flaming Cliffs by American paleontologist Roy Chapman Andrews in the 1920s due to the cliffs' vibrant orange and red color at sunset. Overnight: Local ger camp with hot shower facilities." },
            { day: 13, title: "Yolyn Am", desc: "Travel to Yolyn Am, a remarkable deep gorge nestled in Gobi Gurvansaikhan National Park. This breathtaking valley is renowned for its permanent ice fields that persist even in summer and its rich biodiversity, including various wildlife species. A light hike through the canyon will lead you through picturesque landscapes teeming with life, offering a serene experience away from the rush of modernity.Overnight: Local ger camp with proper toilet and hot shower" },
            { day: 14, title: "Tsagaan Suvarga", desc: "Drive south into the Gobi Desert to Tsagaan Suvarga, a spectacular escarpment formed by wind and water erosion. Its colorful layered cliffs resemble the ruins of an ancient city and offer breathtaking views, especially at sunset. Tsagaan Suvarga (White Stupa) is a dramatic multi-colored cliff formation and geological site in the Gobi Desert of Mongolia, not an AI. The name, which means White Stupa,  comes from the cliffs' appearance, which resembles the ruins of an ancient city or Buddhist stupas from a distance. Once the floor of an ancient ocean, the escarpment is composed of sedimentary rock, primarily layers of clay and limestone, that built up over millions of years. Wind and water erosion have shaped the cliffs into their current form, exposing vivid layers of white, yellow, purple, orange, and red rock.The cliffs stretch for about 400 meters (1,312 feet) in length and reach a height of up to 60 meters (197 feet)." },
            { day: 15, title: "Baga Gazriin Chuluu", desc: "Travel to Baga Gazriin Chuluu, a granite rock valley with ancient monastery ruins and meditation caves. Baga Gazriin Chuluu, a stunning granite rock formation that rises dramatically from the expansive steppes. Here, you can wander through narrow rock passages, discover scenic viewpoints, and explore the remnants of history hidden among the rocks. Overnight: Local ger camp with proper toilet and hot shower.Overnight in our Ger camp." },
            { day: 16, title: "Return to UB", desc: "Drive back to Ulaanbaatar. Upon arrival, have a farewell dinner together then check in at the hotel and enjoy free time. The following morning, you will be transferred to the airport for your departure. End of the tour." }
        ]
    },
    {
        id: 3,
        title: "Mongolia Discovery",
        subtitle: "Terelj, Gobi, Central & North",
        days: 15,
        category: "All Regions",
        image: "/main-tour/khuvsgullake.jpg",
        overview: "This journey takes you through some of Mongolia’s most diverse and iconic regions.Starting from Terelj National Park, the route continues through the Gobi Desert and Central Mongolia, then heads north to the pristine Lake Khövsgöl, known as the “Blue Pearl of Mongolia.”",
        includes: ["All Transfers", "Guide", "Meals", "Ger Camps", "Entrance Fees"],
        excludes: ["Travel Insurance", "Personal Expenses"],
        itinerary: [
            { day: 1, title: "Terelj National Park", desc: "After breakfast star your travel to the Majestic Chinggis Khaan Equestrian Statue, an impressive monument standing 40 meters tall. This iconic statue honors the legendary Mongolian leader, offering panoramic views of the surrounding steppe. To see the eagles and taking photos with an eagle on your arm. After soaking in the historical significance, travel to Terelj National Park, known for its breathtaking granite rock formations, lush green meadows, and tranquil rivers. Experience the serenity of nature in this breathtaking landscape. Overnight: Local ger camp with proper toilet and hot shower." },
            { day: 2, title: "Baga Gazriin Chuluu", desc: "Venture to Baga Gazriin Chuluu, an impressive granite rock formation rising from the steppe, creating a dramatic landscape that invites exploration. Arrive at a family-run ger camp to unwind amidst the serene surroundings, soaking in the natural beauty that envelops you. Discover the ruins of a hidden 17th-century monastery, explore unique rock formations, and visit a natural spring known for its crystal-clear water. This day is all about connecting with nature and recharging your spirit in this enchanting landscape. Overnight: At ger camp (proper toilet and hot shower)." },
            { day: 3, title: "Tsagaan Suvarga", desc: "Visit Tsagaan Suvarga, dramatic limestone cliffs shaped by wind and erosion over millions of years. The colorful layers resemble ancient city ruins and offer stunning photo opportunities. Journey southward into the heart of the Gobi Desert to reach Tsagaan Suvarga, a mesmerizing natural wonder where colorful cliffs rise dramatically from the earth, resembling the ruins of an ancient city. The vibrant layers of sediment create a visual feast, especially at sunset when they glow in shades of gold and crimson.Overnight: Local ger camp with hot shower facilities." },
            { day: 4, title: "Yolyn Am", desc: "Next, venture to Yolyn Am, a stunning gorge within Gobi Gurvansaikhan National Park. This striking valley is known for its permanent ice fields and rich biodiversity, including various wildlife species. A light hike through the cool, shaded canyon offers a serene escape as you take in the unique geological formations surrounding you.Overnight: Local ger camp with proper toilet and hot shower." },
            { day: 5, title: "Khongor Sand Dunes", desc: "Marvel at the spectacular Khongor Sand Dunes, the largest sand dunes in Mongolia, renowned for their ethereal beauty. Listen for the enchanting sounds of the “Singing Dunes,” created by the wind as it flows over the sand. You may also enjoy a memorable camel ride through the endless golden dunes, immersing yourself in the peaceful desert atmosphere.Overnight: Local ger camp with proper toilet and hot shower." },
            { day: 6, title: "Bayanzag", desc: "Embark on a fascinating exploration of Bayanzag, or the Flaming Cliffs, famous for their striking red sands that glow beautifully under the sunset. This site holds historical significance as the location where dinosaur fossils were first discovered, offering a glimpse into the earth's ancient past as you wander through this unique landscape.Overnight: Local ger camp with hot shower" },
            { day: 7, title: "Ongi Monastery", desc: "Visit the Ongi River and the ruins of Ongi Monastery, once one of Mongolia’s largest Buddhist monasteries, offering insight into the country’s spiritual history. Ongi River, where the ruins of the once-magnificent Ongi Monastery stand as a testament to Mongolia’s Buddhist heritage. Take in the tranquil river views while learning out the monastery's rich history, and relish the peaceful environment that surrounds this historical site." },
            { day: 8, title: "Orkhon Waterfall", desc: "Known as Ulaan Tsutgalan (Red Confluence) and is Mongolia's largest waterfall. The Orkhon Waterfall (Ulaan Tsutgalan) in Mongolia is a stunning natural wonder formed by volcanic eruptions and earthquakes, dropping about 20 meters into a basalt canyon, creating dramatic scenery ideal for hiking, horseback riding, and photography, and is a key feature within the UNESCO-listed Orkhon Valley, offering a glimpse into nature and nomadic culture.Formed approximately 20,000 years ago from volcanic activity and earthquakes that created thick basalt layers. The water flows over black basalt rock, creating white waves, and the surrounding landscape is characterized by rocky canyons and lush valleys in summer.Overnight: Local ger camp with proper toilet and hot shower." },
            { day: 9, title: "Kharkhorin", desc: "Continue to Kharkhorin, the ancient capital of the Mongol Empire. Kharkhorin (formerly Karakorum) in Mongolia was the 13th-century capital of the vast Mongol Empire, a major Silk Road hub, and is now a historic town in the Orkhon Valley (a UNESCO site) known for Erdene Zuu Monastery, the first Buddhist monastery in Mongolia, and the nearby ruins of the ancient city, offering a glimpse into imperial history with sites like the impressive Phallic Rock, blending nomadic heritage with Buddhist culture and modern development.  Founded by Ögedei Khan, son of Genghis Khan, it served as the political and economic heart of the Mongol Empire, connecting East and West. Attracted merchants, artisans, and diplomats from across the world, becoming a vibrant cultural melting pot. Destroyed by Ming Dynasty forces in the late 14th century, leading to its abandonment.  Erdene Zuu Monastery: Built from the ruins of the ancient city in 1585, it's a stunning complex of temples surrounded by 108 stupas, showcasing Mongolian Buddhist art. Karakorum Museum: Displays artifacts from the Mongol Empire, providing context to the ancient capital. Overnight: Local ger camp with proper toilet and hot shower." },
            { day: 10, title: "Tsenkher Hot Springs", desc: "Tsenkher Hot Spring is a renowned natural spa in Mongolia's Arkhangai province, famous for its therapeutic, sulfur-rich, alkaline water (around 86°C/187°F) that gushes from the earth, ideal for ailments like rheumatism, skin issues, and fatigue, with facilities including yurt camps for bathing under the stars. It's located in a scenic, wooded valley in the Khangai Mountains, offering both indoor/outdoor pools and a unique natural experience for relaxation and rejuvenation. Relax at Tsenkher Hot Springs, a natural geothermal spa surrounded by forested hills. Enjoy soaking in the mineral-rich hot water. Overnight: Local ger camp with hot shower facilities." },
            { day: 11, title: "White Lake", desc: "Drive to TerkhiinTsagaan Lake, a beautiful freshwater lake formed by volcanic activity. Terkhiin Tsagaan Nuur is a large freshwater lake located in the Khangai Mountains of central Mongolia, protected within the Khorgo-Terkhiin Tsagaan Nuur National Park. The lake was formed thousands of years ago when a massive lava flow from the nearby Khorgo volcano dammed the Terkh River. It sits at an altitude of over 2,000 meters and is approximately 16 kilometers long and 4 to 10 kilometers wide, featuring an island (Noriin Dund Tolgoi) which, according to legend, was the shorn top of a mountain used to cap a flooding well.The area is a protected national park, essential for its biodiversity, which includes various fish species Enjoy a horse riding experience and explore the surrounding lava fields. Overnight: Local ger camp with proper toilet and hot shower." },
            { day: 12, title: "Shine-Ider", desc: "Continue north to the rural town of Shine Ider, experiencing authentic countryside life and vast open landscapes along the way. Shine-Ider (Шинэ-Идэр) is a scenic district (sum) in Khövsgöl Province, northern Mongolia, known for its rolling hills, pastures, forests, traditional nomadic life, and natural beauty, acting as a key stopover for travelers heading between Khövsgöl and central Mongolia, offering authentic rural experiences near sites like Zuun Nuur lake. It's characterized by vast steppe and forest-steppe landscapes. Overnight: Local ger camp with proper toilet and hot shower." },
            { day: 13, title: "Khuvsgul Lake", desc: `Travel to Khuvsgul Lake, often called the “Blue Pearl of Mongolia.” Enjoy the crystal-clear water and surrounding taiga forest scenery. Khuvsgul Lake (or Khovsgol Nuur) is Mongolia's largest freshwater lake by volume, nicknamed the “Blue Pearl,” located in the north near Russia, known for its deep, clear, drinkable water, surrounded by taiga forests and mountains, holding about 70% of Mongolia's fresh water, rich in fish, birds, and unique flora, and is a sacred site with significant cultural and ecological value, connected to Lake Baikal via the Egiin Gol. Northern Mongolia, near the Russian border, at the foot of the Sayan Mountains. Over 136 km long, 262 meters deep, second-most voluminous freshwater lake in Asia. Extremely clear and pure, holding vast amounts of Mongolia's freshwater. Overnight: Local ger camp near the lake with proper toilet and hot shower.` },
            { day: 14, title: "Uran Togoo Volcano", desc: "Drive south to Uran Togoo Volcano, an extinct volcanic crater surrounded by lava fields and forest. The Uran Togoo-Tulga Uul Natural Monument is a national protected area in the Bulgan Province of Mongolia, renowned for its picturesque extinct volcanoes. The area features several extinct volcanoes that were active approximately 20-25 million years ago, including Uran Uul, Tulga Uul, and Jalavch Uul. The fertile soil resulting from ancient lava flows supports rich flora and fauna. Mount Uran Togoo stands at an elevation of approximately 1,686 meters (5,531 feet) above sea level. Its crater is about 500 meters (1,640 feet) in diameter and 50 meters (164 feet) deep.  The center of the crater contains a small, shallow lake, approximately 20 meters wide and 1.5 meters deep, surrounded by dense vegetation including Siberian larches, aspens, and birches. Overnight: Local ger camp. " },
            {
                day: 15, title: "Return to UB", desc: "End After breakfast, drive back to Ulaanbaatar. Upon arrival, have a farewell dinner together then check in at the hotel and enjoy free time. The following morning, you will be transferred to the airport for your departure. End of the tour."
            }
        ]
    },
    {
        id: 4,
        title: "CENTRAL & NORTHERN MONGOLIA TOUR",
        subtitle: "Hot Springs, Volcanoes & Lakes",
        days: 11,
        category: "Central & North",
        image: "/main-tour/kharkhorum.jpg",
        overview: `11-Day Central Mongolia & Khuvsgul Lake Tour: explores the heart of Mongolia, combining sand dunes, ancient capitals, waterfalls, monasteries, hot springs, volcanic landscapes, and the pristine beauty of Khuvsgul Lake. Accommodation throughout the tour will be provided at comfortable local ger camps with proper toilets and hot showers.`,
        includes: [
            "Transfers upon arrival and departure",
            "English-speaking guide",
            "All accommodations during the trip",
            "All meals (guide-prepared meals, local restaurants, and cafés)",
            "Private vehicle with experienced driver",
            "Horse and camel riding",
            "Entrance fees to all national parks and sightseeing sites",
            "Bottled water provided daily",
            "Sleeping bags and mattresses"
        ],
        excludes: [
            "Travel Insurance",
            "Alcoholic beverages",
            "Personal expenses (souvenirs, laundry, etc.)",
            "Optional activities not mentioned in the itinerary"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Ulaanbaatar → City Tour",
                desc: "Our guide and driver will meet you at the airport and transfer you to the hotel. Depending on arrival time, enjoy a short city tour — visit Sukhbaatar Square, Gandantegchinlen Monastery, and the new Chinggis Khan Museum, followed by a welcome dinner. Overnight at the hotel.",
                image: "/main-tour/ulaanbaatar.jpg"
            },
            {
                day: 2,
                title: "Elsen Tasarkhai (Mini Gobi)",
                desc: `Drive west from Ulaanbaatar to Elsen Tasarkhai, also called the “Mini Gobi.” This unique stretch of sand dunes in Central Mongolia lies within Khugnu Khan Nature Reserve and offers a rare mix of desert, forest, and steppe landscapes — perfect for camel riding, hiking, and experiencing nomadic culture near Ulaanbaatar. This 80 km-long “sand fracture” contrasts with the rocky Khugnu Khan Mountain to the north and is easily accessible for short tours, making it a popular destination for those wanting a taste of the Gobi without a long journey. Enjoy a scenic landscape where sand dunes meet green steppe and forested hills; camel riding is available. Overnight: Local ger camp with proper toilet and hot shower.`,
                image: "/main-tour/sanddunes.jpg"
            },
            {
                day: 3,
                title: "Kharkhorin (Karakorum) → Ancient Capital",
                desc: `Continue to Kharkhorin, the ancient capital of the Mongol Empire. Kharkhorin (formerly Karakorum) was the 13th-century capital of the vast Mongol Empire and a major Silk Road hub. Founded by Ögedei Khan, son of Genghis Khan, it served as the political and economic heart of the empire, connecting East and West and attracting merchants, artisans, and diplomats from across the world. It was later destroyed by Ming Dynasty forces in the late 14th century. Visit Erdene Zuu Monastery, the first Buddhist monastery in Mongolia, built in 1585 from the ruins of the ancient city and surrounded by 108 stupas, and explore the Karakorum Museum for context and artifacts. Overnight: Local ger camp with proper toilet and hot shower.`,
                image: "/main-tour/kharkhorum.jpg"
            },
            {
                day: 4,
                title: "Orkhon Waterfall (Ulaan Tsutgalan)",
                desc: `Visit Orkhon Waterfall, known as “Ulaan Tsutgalan” (Red Confluence), Mongolia’s largest waterfall. Formed about 20,000 years ago by volcanic activity and earthquakes, the water drops roughly 20 meters into a basalt canyon, creating dramatic scenery ideal for hiking, horseback riding, and photography. This highlight sits within the UNESCO-listed Orkhon Valley, where black basalt rock meets lush summer valleys and white water waves. Overnight: Local ger camp with proper toilet and hot shower.`,
                image: "/main-tour/orkhon.jpg"
            },
            {
                day: 5,
                title: "Tsenkher Hot Springs",
                desc: `Relax at Tsenkher Hot Springs, a renowned natural spa in Mongolia’s Arkhangai province. The therapeutic, sulfur-rich, alkaline water (around 86°C/187°F) is known to help with fatigue and various ailments. Enjoy soaking in mineral-rich hot water in a scenic wooded valley of the Khangai Mountains, with facilities that often include indoor/outdoor pools and bathing under the stars. Overnight: Local ger camp with hot shower facilities.`,
                image: "/main-tour/khorgo.jpg"
            },
            {
                day: 6,
                title: "Terkhiin Tsagaan Lake (White Lake)",
                desc: `Drive to Terkhiin Tsagaan Lake, a beautiful freshwater lake formed by volcanic activity and protected within Khorgo–Terkhiin Tsagaan Nuur National Park. The lake was created when a massive lava flow from the nearby Khorgo volcano dammed the Terkh River. Sitting at over 2,000 meters altitude, it is roughly 16 km long and 4–10 km wide. The surrounding national park is known for its striking volcanic landscapes and biodiversity. Overnight: Local ger camp with proper toilet and hot shower.`,
                image: "/main-tour/terkhiintsagaan.jpg"
            },
            {
                day: 7,
                title: "Shine Ider → Small Town Area",
                desc: `Continue north to the rural town of Shine Ider, experiencing authentic countryside life and vast open landscapes along the way. Shine-Ider (Шинэ-Идэр) is a scenic district in Khuvsgul Province, known for rolling hills, pastures, forests, traditional nomadic life, and natural beauty — a key stopover for travelers moving between Khuvsgul and central Mongolia. Overnight: Local ger camp with proper toilet and hot shower.`,
                image: "/main-tour/khorgo.jpg"
            },
            {
                day: 8,
                title: "Khuvsgul Lake → “Blue Pearl of Mongolia”",
                desc: `Travel to Khuvsgul Lake, often called the “Blue Pearl of Mongolia.” Enjoy the crystal-clear water and surrounding taiga forest scenery. Khuvsgul Lake (Khovsgol Nuur) is Mongolia’s largest freshwater lake by volume, holding about 70% of the country’s fresh water. Located in the north near Russia at the foot of the Sayan Mountains, the lake is over 136 km long and up to 262 meters deep, with exceptionally clear, drinkable water and rich wildlife. Overnight: Local ger camp near the lake with proper toilet and hot shower.`,
                image: "/main-tour/khuvsgullake.jpg"
            },
            {
                day: 9,
                title: "Khuvsgul Lake Exploration",
                desc: "Full day to explore Khuvsgul Lake. Optional activities include hiking, boating, horseback riding, or simply relaxing by the lakeshore and enjoying nature. Overnight: Local ger camp with proper toilet and hot shower.",
                image: "/main-tour/khuvsgullake.jpg"
            },
            {
                day: 10,
                title: "Uran Togoo Volcano",
                desc: `Drive south to Uran Togoo Volcano, an extinct volcanic crater surrounded by lava fields and forest, protected as part of the Uran Togoo–Tulga Uul Natural Monument in Bulgan Province. The area’s volcanoes were active roughly 20–25 million years ago. Mount Uran Togoo stands about 1,686 meters above sea level; its crater is around 500 meters in diameter and 50 meters deep, with a small shallow lake in the center surrounded by dense vegetation. Overnight: Local ger camp.`,
                image: "/main-tour/khorgo.jpg"
            },
            {
                day: 11,
                title: "Drive back to Ulaanbaatar",
                desc: "After breakfast, drive back to Ulaanbaatar. Upon arrival, have a farewell dinner together then check in at the hotel and enjoy free time. The following morning, you will be transferred to the airport for your departure. End of the tour.",
                image: "/main-tour/ulaanbaatar.jpg"
            }
        ]
    },
    {
        id: 5,
        title: "Gobi Desert Adventure",
        subtitle: "Natural Wonders of the South",
        days: 10,
        category: "Gobi Desert",
        image: "/main-tour/bayanzag.jpg",
        overview: "A focused 10-day loop hitting all the major Gobi highlights: Singing Dunes, Flaming Cliffs, Ice Valley, and White Stupa.",
        includes: ["Guide", "Transport", "Meals", "Park Fees"],
        excludes: ["Insurance", "Tips"],
        itinerary: [
            { day: 1, title: "Arrival UB City Tour", desc: "Our guide and driver will meet you at the airport and transfer you to the hotel. Depending on arrival time, enjoy a short city tour — visit Sukhbaatar Square and the Gandantegchinlen Monastery, the  main Sukhbaatar square, the new Chinggis Khan Museum followed by a welcome dinner. Overnight at the hotel." },
            { day: 2, title: "Terelj National Park", desc: "Chinggis Statue." },
            { day: 3, title: "Tsagaan Suvarga", desc: "White Stupa." },
            { day: 4, title: "Yolyn Am", desc: "Ice Canyon." },
            { day: 5, title: "Khongor Sand Dunes", desc: "Camel riding." },
            { day: 6, title: "Bayanzag", desc: "Dinosaur fossils." },
            { day: 7, title: "Ongi Monastery", desc: "Temple ruins." },
            { day: 8, title: "Baga Gazriin Chuluu", desc: "Granite rocks." },
            { day: 9, title: "Relaxation", desc: "Morning rest and nature walks." },
            { day: 10, title: "Return to UB", desc: "Drive back." }
        ]
    },
    {
        id: 6,
        title: "Reindeer & Taiga",
        subtitle: "Central & Northern Cultural Tour",
        days: 10,
        category: "Central & North",
        image: "/main-tour/khorgo.jpg",
        overview: "A specialized tour focusing on the Tsaatan Reindeer herders in the remote taiga, combined with the Mini Gobi and White Lake.",
        includes: ["Tsaatan Permits", "Horses", "Guide", "Meals"],
        excludes: ["Personal Gear", "Insurance"],
        itinerary: [
            { day: 1, title: "Mini Gobi & Kharkhorin", desc: "Sand dunes and Monastery." },
            { day: 2, title: "Khorgo Volcano", desc: "White Lake." },
            { day: 3, title: "Murun Town", desc: "Drive north." },
            { day: 4, title: "Darkhad Valley", desc: "Stay with nomads." },
            { day: 5, title: "Trek to Tsaatan", desc: "Horse ride to Reindeer herders." },
            { day: 6, title: "Khuvsgul Lake", desc: "Return from Taiga to the lake." },
            { day: 7, title: "Deer Stones", desc: "Ancient monuments." },
            { day: 8, title: "Bulgan Province", desc: "Forest steppe drive." },
            { day: 9, title: "Return to UB", desc: "Scenic drive." },
            { day: 10, title: "City Tour", desc: "Museums and shopping." }
        ]
    },
    {
        id: 7,
        title: "Gobi Essentials",
        subtitle: "Classic Desert Route",
        days: 8,
        category: "Gobi Desert",
        image: "/main-tour/bagachuluu.jpg",
        overview: "The perfect week-long getaway to experience the vastness of the Gobi, including the Singing Sands and Flaming Cliffs.",
        includes: ["Standard Inclusions"],
        excludes: ["Standard Exclusions"],
        itinerary: [
            { day: 1, title: "Arrival", desc: "UB City Tour." },
            { day: 2, title: "Baga Gazriin Chuluu", desc: "Chinggis Statue & Rocks." },
            { day: 3, title: "Yolyn Am", desc: "Vulture Valley." },
            { day: 4, title: "Khongor Dunes", desc: "Singing Sands." },
            { day: 5, title: "Khongor Dunes", desc: "Full day exploration." },
            { day: 6, title: "Bayanzag", desc: "Flaming Cliffs." },
            { day: 7, title: "Tsagaan Suvarga", desc: "White Stupa." },
            { day: 8, title: "Return to UB", desc: "End of tour." }
        ]
    },
    {
        id: 8,
        title: "Central Highlights",
        subtitle: "History & Nature",
        days: 7,
        category: "Central & North",
        image: "/main-tour/orkhon.jpg",
        overview: "A short but packed tour visiting the Ancient Capital, Hot Springs, Waterfalls, and the Mini Gobi.",
        includes: ["Standard Inclusions"],
        excludes: ["Standard Exclusions"],
        itinerary: [
            { day: 1, title: "Arrival", desc: "City Tour." },
            { day: 2, title: "Mini Gobi", desc: "Camel riding." },
            { day: 3, title: "Orkhon Waterfall", desc: "Volcanic landscape." },
            { day: 4, title: "Tsenkher Hot Springs", desc: "Spa day." },
            { day: 5, title: "White Lake", desc: "Volcanic lake." },
            { day: 6, title: "Kharkhorin", desc: "Erdene Zuu Monastery." },
            { day: 7, title: "Return to UB", desc: "Drive back." }
        ]
    }
];

export default function MainTourPage() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedTour, setSelectedTour] = useState<(typeof toursData)[0] | null>(
        null
    );

    const handleOpenModal = useCallback(
        (tour: (typeof toursData)[0]) => {
            setSelectedTour(tour);
            onOpen();
        },
        [onOpen]
    );

    return (
        <section className="px-6 bg-[#FAF9F6] min-h-screen py-24">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="space-y-4">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
                            Curated Journeys Across <br />
                            <span className="italic text-amber-700">The Land of Blue Sky</span>
                        </h2>
                    </div>
                </div>
                <div className="relative">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence>
                            {toursData.map((tour, index) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    key={tour.id}
                                    className="group bg-white rounded-[2rem] overflow-hidden border border-stone-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_50px_rgba(0,0,0,0.10)] transition-all duration-500 cursor-pointer flex flex-col h-full snap-start"
                                    onClick={() => handleOpenModal(tour)}
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={tour.image || FALLBACK_CARD_IMAGE}
                                            alt={tour.title}
                                            fill
                                            sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 30vw"
                                            priority={index === 0}
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 right-4 bg-stone-900/80 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                                            <Clock size={12} className="text-amber-500" />
                                            {tour.days} Days
                                        </div>

                                        {/* Region */}
                                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur text-stone-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                                            <Compass size={12} className="text-amber-600" />
                                            {tour.category}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="mb-4">
                                            <h3 className="text-xl font-serif font-bold text-stone-900 leading-tight group-hover:text-amber-700 transition-colors">
                                                {tour.title}
                                            </h3>
                                            <p className="text-sm text-stone-500 mt-1">{tour.subtitle}</p>
                                        </div>

                                        <p className="text-stone-600 text-sm line-clamp-3 mb-6 leading-relaxed">
                                            {tour.overview}
                                        </p>

                                        <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
                                            <span className="text-xs font-semibold text-stone-500 tracking-wide">
                                                View itinerary
                                            </span>
                                            <div className="w-10 h-10 rounded-full bg-white border border-stone-200 group-hover:bg-amber-600 group-hover:border-amber-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
                                                <ArrowRight size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="4xl"
                scrollBehavior="inside"
                backdrop="blur"
                classNames={{
                    base: "bg-white",
                    header: "border-b border-stone-100",
                    footer: "border-t border-stone-100",
                    closeButton: "hover:bg-stone-100 active:bg-stone-200",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-stone-100 flex flex-col gap-1 py-6 px-8">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase">
                                        {selectedTour?.category}
                                    </span>
                                    <span className="flex items-center gap-1 text-stone-500 text-xs font-bold uppercase">
                                        <Clock size={14} /> {selectedTour?.days} Days
                                    </span>
                                </div>
                                <h2 className="text-3xl font-serif text-stone-900">
                                    {selectedTour?.title}
                                </h2>
                                <p className="text-stone-500 font-normal">{selectedTour?.subtitle}</p>
                            </ModalHeader>

                            <ModalBody className="px-8 py-8">
                                <pre>{JSON.stringify(selectedTour, null, 2)}</pre>
                                zaa
                                <div className="mb-10">
                                    <h4 className="text-lg font-bold text-stone-900 mb-3 border-l-4 border-amber-600 pl-3">
                                        Tour Overview
                                    </h4>
                                    <p className="text-stone-600 leading-relaxed text-lg">
                                        {selectedTour?.overview}
                                    </p>
                                </div>

                                <div className="mb-12">
                                    <h4 className="text-lg font-bold text-stone-900 mb-6 border-l-4 border-amber-600 pl-3">
                                        Daily Itinerary
                                    </h4>

                                    <div className="space-y-0 relative border-l-2 border-stone-200 ml-3">
                                        {selectedTour?.itinerary?.map((day: any, idx) => (
                                            <div key={idx} className="relative pl-8 pb-10 last:pb-0">
                                                <span className="absolute -left-[9px] top-3 h-4 w-4 rounded-full bg-white border-2 border-amber-600" />
                                                <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-4 sm:gap-5">
                                                    <div className="relative overflow-hidden rounded-xl h-48 sm:h-40">
                                                        <Image
                                                            src={day.image ?? FALLBACK_DAY_IMAGE}
                                                            alt={day.title}
                                                            fill
                                                            sizes="(max-width: 640px) 100vw, 220px"
                                                            className="object-cover"
                                                        />
                                                    </div>

                                                    <div className="min-w-0">
                                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                                                            <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs font-bold text-stone-700">
                                                                Day {day.day}
                                                            </span>
                                                            <h4 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                                                                {day.title}
                                                            </h4>
                                                        </div>

                                                        <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                                                            {day.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Includes / Excludes */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-stone-50 p-6 rounded-2xl">
                                    <div>
                                        <h5 className="flex items-center gap-2 font-bold text-emerald-700 mb-4">
                                            <CheckCircle2 size={20} /> Included
                                        </h5>
                                        <ul className="space-y-2">
                                            {selectedTour?.includes?.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="text-sm text-stone-600 flex items-start gap-2"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h5 className="flex items-center gap-2 font-bold text-red-500 mb-4">
                                            <XCircle size={20} /> Not Included
                                        </h5>
                                        <ul className="space-y-2">
                                            {selectedTour?.excludes?.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="text-sm text-stone-600 flex items-start gap-2"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </section>
    );
}