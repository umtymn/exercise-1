const main = document.querySelector("main")

const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      console.log(data);
      data.slice(0,10).forEach(item=>{

        const figure= document.createElement("figure");
        main.appendChild(figure)

        const img=document.createElement("img")
        img.src=item.thumbnailUrl
        figure.appendChild(img)

        const figcaption=document.createElement("figcaption")
        figcaption.textContent=item.title
        figure.appendChild(figcaption)
      })
    } catch (error) {
      console.log(error);
    }
  };

getData()

function arabicToRoman(num) {
    const romanNumeralMap = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];
  
    let result = '';
    
    romanNumeralMap.forEach(item => {
        while (num >= item.value) {
            result += item.numeral;
            num -= item.value;
     }
    });
    return result;
  }
//console.log(arabicToRoman(2023)); // "MMXIX"

  