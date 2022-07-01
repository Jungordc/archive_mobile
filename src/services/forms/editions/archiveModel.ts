/** @format */

import { types, cast } from "mobx-state-tree";

export const ArchiveEditionModel = types
    .model("Archive", {
        title: types.string,
        description: types.string,
        category: types.string,
        cover: types.maybeNull(types.string),
        tags: types.array(types.string),
        docs: types.array(types.string),
    })
    .actions((self) => ({
        addDoc: (url: string) => {
            self.tags.push(url);
        },
        removeDoc: (url: string) => {
            self.tags = cast(self.tags.filter((item) => item !== url));
        },
    }));

export const ArchiveEditionModelInstance = ArchiveEditionModel.create({
    cover: "https://external-lhr8-1.xx.fbcdn.net/safe_image.php?w=500&h=261&url=https%3A%2F%2Fwww.jeuneafrique.com%2Fmedias%2F2022%2F06%2F28%2Fjad20220628-ass-africapower-foot-real-1256x628-1656432255.jpg&cfs=1&ext=jpg&_nc_eui2=AeF0mkHA7TSz-qtwk4vAVVHOaOIR4hpH3_1o4hHiGkff_YvPMm94FAF2t61wGXAphFC-2vGunEhnMPyX49yUcAFQ&utld=jeuneafrique.com&_nc_oe=70608&_nc_sid=505865&_nc_o2e=1&ccb=3-6&_nc_hash=AQHsey-t_QS4I-PU",
    title: "Boire un verre de lait, cela tue personne",
    description: "",
    category: "",
    docs: [
        "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/291149220_159689253271752_5438351666556519505_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHQVmSrtyn0gYAkRg43YUXMLhnALXjQCgYuGcAteNAKBsjryRihhxYnNUTNsOxD2HsAirpKqffbIwBbSgdKA7TS&_nc_ohc=hASd4zLKJwEAX9lY9c5&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&oh=00_AT9C6JiWhgkplGHBKfiowxL-hG8NaRFenQcHm-oMIl0rUA&oe=62C3F38C",
        "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/290871622_582272909929219_7345076447443380096_n.jpg?stp=dst-jpg_s640x640&_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFoeZ80tpNJmlGwNDKddsjvgPYd21azEL2A9h3bVrMQvV4AemcdiTAPrhRFqMMsA2EBG23GF6Tu6bSw9HZuSYae&_nc_ohc=rxjZel9LKZAAX8Ipr2G&tn=EmSAJVFovgAAsbUB&_nc_zt=23&_nc_ht=scontent-lhr8-1.xx&oh=00_AT9AAfzgzzmZDJggT58F5vU9_1DNj1ki9_100ONEM5EkDA&oe=62C44EAB",
        "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/291305429_10160110220906425_5495704076121956765_n.jpg?stp=cp1_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFUt87GE16q5OuSQilTA-z740F2fHutDcDjQXZ8e60NwBAXHMqXJiR98fB51Hr3wZa6bdgw1S-8qiajEZftiOj3&_nc_ohc=BNaoGYv88kcAX9KfQ1l&_nc_zt=23&_nc_ht=scontent-lhr8-1.xx&oh=00_AT--gnYSb1PfBLubTDs__hSFBxegaECZ2Zy2IG6uBe0hrQ&oe=62C315CE",
        "https://external-lhr8-1.xx.fbcdn.net/safe_image.php?w=500&h=261&url=https%3A%2F%2Fs.rfi.fr%2Fmedia%2Fdisplay%2F3cc7a71e-f7f0-11ec-8640-005056bfb2b6%2Fw%3A1280%2Fp%3A16x9%2Fvieuxbis.jpg&cfs=1&ext=jpg&_nc_eui2=AeGnjIYIp2hTC1WUDEtd2BFqhu3xXbdcbjaG7fFdt1xuNmr__8rUp1IYM_25YWU4800yh_U2215BruoZHO2Wo0UG&utld=rfi.fr&_nc_oe=70608&_nc_sid=505865&_nc_o2e=1&ccb=3-6&_nc_hash=AQFsxsPnoLQZk7hF",
        "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/290515074_5397912883563587_5480911927377818403_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE9284iLuoW-4xANcrReoq6SnKa_WJyqF5Kcpr9YnKoXoIMs9h6dIvq71gojzirftoUAb99wanIJxgDMbvtyWTY&_nc_ohc=UBjs_ACKgDwAX-PSlIQ&_nc_zt=23&_nc_ht=scontent-lhr8-1.xx&oh=00_AT887Adx6Nb7UBOKO_XBfMP3UJFFGk_Thdtbpb814fofow&oe=62C388A3",
        "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/291165654_2748753501935188_4462085066416131517_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFJPdwf7IQ3OANkrUNVzpDu-hpzNiKR_zX6GnM2IpH_NZp76Ak_Z1tZeQlt7uajHL1YAdXMNg7Vq3Uwzt0Eb-eR&_nc_ohc=IxB4ue7H37MAX_Nnnyp&_nc_zt=23&_nc_ht=scontent-lhr8-1.xx&oh=00_AT8LOeTz-SWIAqtRTUgnoUlJkrbOpo4aB7IaytljzbafxA&oe=62C4D7A9",
    ],
    tags: ["Annee", "Institusion"],
});
