class Student {
    constructor(firstName, secondName = '', lastName, secondLastName = '', image) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.lastName = lastName;
        this.secondLastName = secondLastName;
        this.image = image;
    }
}

class StudentList {
    constructor(name) {
        this.name = name;
        this.students = [];
    }

    addStudent(firstName, secondName = '', lastName, secondLastName = '', image) {
        this.students.push(new Student(firstName, secondName, lastName, secondLastName, image));
    }

    getStudents() {
        return this.students;
    }
}
var classNames = [];

// Clase ejemplo
var classDang1 = new StudentList("Danganronpa Trigger Happy Havoc");
classDang1.addStudent('Makoto', '', 'Naegi', '', './pictures/makoto_naegi.png');
classDang1.addStudent('Kyoko', '', 'Kirigiri', '', './pictures/kyoko_kirigiri.png');
classDang1.addStudent('Byakuya', '', 'Togami', '', './pictures/byakuya_togami.png');
classDang1.addStudent('Aoi', '', 'Asahina', '', './pictures/aoi_asahina.png');
classDang1.addStudent('Yasuhiro', '', 'Hagakure', '', './pictures/yasuhiro_hagakure.png');
classDang1.addStudent('Toko', '', 'Fukawa', '', './pictures/toko_fukawa.png');
classDang1.addStudent('Celestia', '', 'Ludenberg', '', './pictures/celestia_ludenberg.png');
classDang1.addStudent('Sakura', '', 'Ogami', '', './pictures/sakura_ogami.png');
classDang1.addStudent('Mondo', '', 'Owada', '', './pictures/mondo_owada.png');
classDang1.addStudent('Kiyotaka', '', 'Ishimaru', '', './pictures/kiyotaka_ishimaru.png');
classDang1.addStudent('Hifumi', '', 'Yamada', '', './pictures/hifumi_yamada.png');
classDang1.addStudent('Leon', '', 'Kuwata', '', './pictures/leon_kuwata.png');
classDang1.addStudent('Chihiro', '', 'Fujisaki', '', './pictures/chihiro_fujisaki.png');
classDang1.addStudent('Sayaka', '', 'Maizono', '', './pictures/sayaka_maizono.png');
classDang1.addStudent('Junko', '', 'Enoshima', '', './pictures/junko_enoshima.png');
classNames.push(classDang1);

var classDang2 = new StudentList("Danganronpa 2 Goodbye Despair");
classDang2.addStudent('Hajime', '', 'Hinata', '', './pictures/hajime_hinata.png');
classDang2.addStudent('Nagito', '', 'Komaeda', 'deez Nuts', './pictures/nagito_komaeda.png');
classDang2.addStudent('Chiaki', '', 'Nanami', '', './pictures/chiaki_nanami.png');
classDang2.addStudent('Fuyuhiko', '', 'Kuzuryu', '', './pictures/fuyuhiko_kuzuryu.png');
classDang2.addStudent('Akane', '', 'Owari', '', './pictures/akane_owari.png');
classDang2.addStudent('Gundham', '', 'Tanaka', '', './pictures/gundham_tanaka.png');
classDang2.addStudent('Kazuichi', '', 'Soda', '', './pictures/kazuichi_soda.png');
classDang2.addStudent('Peko', 'Pekito', 'Pekoyama', '', './pictures/peko_pekoyama.png');
classDang2.addStudent('Sonia', '', 'Nevermind', '', './pictures/sonia_nevermind.png');
classDang2.addStudent('Teruteru', '', 'Hanamura', '', './pictures/teruteru_hanamura.png');
classDang2.addStudent('Mahiru', '', 'Koizumi', '', './pictures/mahiru_koizumi.png');
classDang2.addStudent('Hiyoko', 'S', 'Saionji', 'Roblox', './pictures/hiyoko_saionji.png');
classDang2.addStudent('Ibuki', '', 'Mioda', '', './pictures/ibuki_mioda.png');
classDang2.addStudent('Nekomaru', '', 'Nidai', '', './pictures/nekomaru_nidai.png');
classDang2.addStudent('Mikan', '', 'Tsumiki', '', './pictures/mikan_tsumiki.png');
classNames.push(classDang2);


export { classNames };
export { StudentList };