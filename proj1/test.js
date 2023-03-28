

    console.log("!!START!!")
    function Name() {
      const neme = console.log("!Zahar!")
      Name = neme
      return  neme
    }
    setTimeout(Name,2000)
    function userZahar(name,pasword){
      name = "Nastu"
      pasword = " (43434 "+"pasword)"
      const sum = name + pasword
      console.log(sum)
      userZahar = sum
      return sum
    }
    setTimeout(userZahar, 2000)
    
    
    
    function youIndex() {
      const yres = "12" + "(yres)"
      const index = " 32" + "(index) "
      const name = " zahar "
      const strit = "galitskogo " +" strit "+ name
      const myMe = yres + index + strit
      youIndex = myMe
      console.log(myMe)
      return myMe
    }
    setTimeout(youIndex, 3000)
    
    function EndOfWork (){
      console.log("!!END_OF_WORK!!")
    }
    
    setTimeout(EndOfWork , 4000)
    const sumTest = (endofwork)=>{
      endofwork = `${Name} ${userZahar} ${ youIndex}`//ответ в таком случае === то что введено выше//
      console.log(endofwork);
      return endofwork
    }
    setTimeout(sumTest , 5000)
    const meAreu = [ Name,userZahar,youIndex]
    console.table(meAreu)