const employee = require ("./employee")


class  Manager extends employee{
    constructor(name, ID, email, officenumber){
        super(name, ID,email)

        this.officenumber = officenumber

     
    }

    gitofficenumber(){
        return this.officenumber
    }

    gitrole(){
        return 'Manager'
    }
}
module.exports=Manager