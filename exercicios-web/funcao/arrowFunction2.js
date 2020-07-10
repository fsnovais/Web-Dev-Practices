function pessoa () {
    this.pessoa = 0

    setInterval(() => {
        this.pessoa ++
        console.log(this.pessoa)
    },1000)
}

new pessoa