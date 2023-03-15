class employee {
    constructor(name, ID, email){
       this.ID = ID;
       this.email = email;
       this.name = name;
    }


    getname(){
        return this.name
    }


    getemail(){
        return this.email
    }

    gitid(){
        return this.ID
    }

    gitrole(){
        return 'employee'
    }

}

module.exports=employee