import { Poiret_One, Ubuntu, Rock_Salt, Playwrite_US_Trad, Merienda } from 'next/font/google';
// import {Geist, Geist_Mono} from 'next/font/google'
// import {Material_Symbols_Outlined} from 'next/font/google'

export const fontUbuntu = Ubuntu({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-ubuntu',
});

export const fontPoiretOne = Poiret_One({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-poiret-one',
});

export const fontRockSalt = Rock_Salt({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-rock-salt',
});

export const fontPlaywriteUSTrad = Playwrite_US_Trad({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-playwrite-us-trad',
});

export const fontMerienda = Merienda({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-merienda',
});

// export const fontGeistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });
//
// export const fontGeistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// })

// export const fontMaterialSymbolsOutlined = Material_Symbols_Outlined({
//     weight: ['400', '700'],
//     subsets: ['latin'],
//     variable: '--font-material-symbols-outlined',
// })
