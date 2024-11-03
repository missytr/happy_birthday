// Thay đổi nội dung búc thư ở đây
var letterContent =" Chúc mừng sinh nhật anh yêu💕. Đây đã là sinh nhật thứ hai của anh mà em có cơ hội được góp mặt, điều đó đối với em thật sự là một niềm hạnh phúc vô giá. Cảm ơn anh vì đã luôn bên cạnh, chia sẻ và nâng đỡ em trong quãng thời gian chúng mình bên nhau. Ở bên anh, em luôn cảm thấy mình được yêu thương và đặc biệt, dù đôi khi chúng ta cũng có những lúc bất đồng, nhưng điều đó lại cho em thấy mình phải trân trọng anh nhiều hơn. Em chỉ muốn anh biết một điều: Em yêu anh nhiều lắm!"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})