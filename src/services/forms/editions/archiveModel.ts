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
        "https://th.bing.com/th/id/OIP.Nri3x9AFUTPmoN0tVB9ziAHaLc?pid=ImgDet&w=638&h=986&rs=1",
        "https://th.bing.com/th/id/OIP.ijc7j0lvuMoh0MeEZZqtMQDbEc?pid=ImgDet&w=634&h=823&rs=1",
        "https://archive.hnsa.org/doc/whitehead3/img/pg45.jpg",
        "https://www.bing.com/th?id=ODL.d78dcb6bd311265db6409baa1d1c46be&w=197&h=112&c=7&rs=1&qlt=80&o=6&pid=RichNav",
        "https://www.bing.com/th?id=ODL.5670bceb512d9ebd9af5ce026ed42be4&w=197&h=112&c=7&rs=1&qlt=80&o=6&pid=RichNav",
        "https://www.bing.com/th?id=OIP.l_pW8TcqF5wI8oF5DcoMnAHaIL&w=186&h=206&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        "https://pixy.org/src/467/thumbs350/4675468.jpg",
        "https://www.bing.com/th?id=OIP.Y2uAB8AOCC88s6iQML13MgHaEK&w=187&h=98&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    ],
    tags: ["Annee", "Institusion"],
});
