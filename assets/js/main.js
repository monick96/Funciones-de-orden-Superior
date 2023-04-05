const { createApp } = Vue// desestructuring
const app = createApp({
    data() {
        return {
            characters: [
                { name: "Homer Simpson", age: 39, job: "Safety Inspector", image: "https://www.soy502.com/sites/default/files/styles/mobile_full_node/public/2021/Mayo/12/frases_homero_simpson_cumpleanos_soy502_guatemala.jpg" },
                { name: "Marge Simpson", age: 36, job: "Housewife", image: "https://www.cronica.com.ar/__export/1641545553404/sites/cronica/img/2022/01/07/viral_vestido_de_marge_homenaje_de_una_historia_trxgica_1_crop1641545414184.jpg_504070365.jpg" },
                { name: "Bart Simpson", age: 10, job: "Student", image: "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/series-television/voz-bart-simpson-sorpresa-video-youtube/130971185-1-esl-ES/Youtube-La-voz-de-Bart-Simpson-sorprende-a-un-adolescente.jpg" },
                { name: "Lisa Simpson", age: 8, job: "Student", image: "https://phantom-elmundo.unidadeditorial.es/ab854ebc00cd5e57a9b9d63276b87bc9/resize/1200/f/jpg/assets/multimedia/imagenes/2022/09/19/16635806462937.png" },
                { name: "Maggie Simpson", age: 1, job: "Baby", image: "https://www.fayerwayer.com/resizer/5JiKLPuZLnCb25anQVwAeCJUAWc=/1440x1080/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/SK2N4F7ILNF43KBPWFL4TR5MPI.jpg" }
            ],
            backup_characters: [],

        }
    },
    created() {
        this.backup_characters = this.characters.slice();
    },
    mounted() {
    },
    methods: {
        sort() {
            this.characters= this.backup_characters.sort((a, b) => a.age - b.age); // sort by age funciona aplica sobre el array original
        },
        some() {
            const isStudent = this.backup_characters.some(
                character => character.job === "Student"
            );
            //asignar ese elemento a characters y mostrarlo
            alert(`There ${isStudent ? "are" : "are no"} students`); //funciona
        },
        findIndex() {
            //asignar ese elemento a characters y mostrarlo
            const index = this.backup_characters.findIndex(
                character => character.age === 8
            );
            this.characters = [this.backup_characters[index]]
            
            console.log(index);
        },
        find() {
            //asignar ese elemento a characters y mostrarlo
            el = this.backup_characters.find(
                character => character.name == "Homer Simpson"
            );
            this.characters = [el]
            
            console.log(this.characters);
        },
        reduce() {//funciona
            const totalAge = this.backup_characters.reduce(
                (acc, character) => acc + character.age,
                0
            );
            //alert(`The sum of the ages of the family members is ${totalAge}`);
            alert(`The sum of the ages of the family members is ${totalAge}`)
        },
        filter() {//funciona
            this.characters = this.backup_characters.filter(
                character => character.age > 18
            );
        },
        forEach() { //funciona
            let images = []
            this.backup_characters.forEach(character => {
                images.push({image:character.image});
            });
            this.characters= images
        },
        map() { //funciona sobre el array original
            this.characters = this.backup_characters.map(character => {
                return { ...character, city: "Springfield" };
            });
        }

    },
    computed: {
    }
}).mount('#app')



