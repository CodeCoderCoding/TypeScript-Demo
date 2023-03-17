
interface Skill {
    name: string;
}

function whatSkill(skill: Skill){
    console.log(skill);
}

let mySkill={name: "run"}

whatSkill(mySkill);