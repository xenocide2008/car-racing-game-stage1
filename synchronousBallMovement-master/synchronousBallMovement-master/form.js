class Form
{
    constructor()
    {
        this.title=createElement("h1")
        this.input=createInput("")
        this.button=createButton("play")
        this.greeting=createElement("h2")
    }

    display()
    {
        this.title.position(600,20)
        this.title.html("CAR RACING GAME")
        this.input.position(600,400)
        this.button.position(600,450)

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            this.greeting.html("WELCOME "+this.input.value())
            this.greeting.position(600,400)
        })
    }
}