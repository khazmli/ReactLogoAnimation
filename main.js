let clickCount = 0; // Tıklama sayısını saklayacak değişken

function startAnima() {
    const element1 = document.querySelector(".circle1");
    const element2 = document.querySelector(".circle2");
    const element3 = document.querySelector(".circle3");
    const element4 = document.querySelector(".circle-center")
    clickCount++; // Tıklama sayısını artır

    // Tıklama sayısına bağlı olarak sınıfları ekleyin veya kaldırın
    if (clickCount % 2 === 1) {
        // Tek sayıda tıklama olduğunda sınıfları ekle
        element1.classList.add("animaClass1");
        element2.classList.add("animaClass2");
        element3.classList.add("animaClass3");
        element4.classList.add("animaClass4");

        // Rengi kırmızıya ayarla
        element1.style.left = "0";
        element2.style.left = "0";
        element2.style.top = "45%";
        element3.style.left = "0";
        element3.style.top = "45%";
    } else {
        // Çift sayıda tıklama olduğunda sınıfları kaldır
        element1.classList.remove("animaClass1");
        element2.classList.remove("animaClass2");
        element3.classList.remove("animaClass3");
        element4.classList.remove("animaClass4");

        // Rengi varsayılan olarak ayarla
        element1.style.left = "";
        element2.style.left = "";
        element2.style.top = "";
        element3.style.left = "";
        element3.style.top = "";
       
    }
}