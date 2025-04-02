const averageGrade = Math.floor(Math.random()*101);

switch (true) {

    case (averageGrade < 60):
        console.log("Незадовільно");
        break;

        case (averageGrade < 71):
            console.log("Задовільно");
            break;

            case (averageGrade <= 80):
                console.log("Добре");
                break;

                case (averageGrade <= 90):
                    console.log("Дуже добре");
                    break;

                    default:
                        console.log("Відмінно");
                        break;
}
console.log(averageGrade);