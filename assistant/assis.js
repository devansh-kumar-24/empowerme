const texts = document.querySelector(".texts");

function speak(sentence) {
  const text_speak = new SpeechSynthesisUtterance(sentence);

  text_speak.rate = 1;
  text_speak.pitch = 1;

  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  var day = new Date();
  var hr = day.getHours();

  if (hr >= 0 && hr < 12) {
    speak("Good Morning Sir");
  } else if (hr == 12) {
    speak("Good noon Sir");
  } else if (hr > 12 && hr <= 17) {
    speak("Good Afternoon Sir");
  } else {
    speak("Good Evening Sir");
  }
}

window.addEventListener("load", () => {
  speak("Activating ");
  speak("Assistant");
  wishMe();
});

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I am fine";
      texts.appendChild(p);
      speak(p);
    }
    if (
      text.includes("what's your name") ||
      text.includes("what is your name")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "My Name is Empower";
      texts.appendChild(p);
      speechSynthesis.speak(p);
    }
    if (text.includes("Is it safe to exercise during pregnancy")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "Generally, yes. However, it's essential to consult with your healthcare provider before starting or continuing any exercise routine. Low-impact activities like walking and swimming are often recommended";
      texts.appendChild(p);
      speechSynthesis.speak(p);
    }

    if (text.includes("What foods should I avoid during pregnancy")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "Certain foods, like raw seafood, unpasteurized dairy, and undercooked meats, should be avoided. Consult with your doctor for a comprehensive list. Generally, a balanced diet with a variety of nutrients is crucial.";
      texts.appendChild(p);
      speechSynthesis.speak(p);
    }

    if (text.includes("How much weight gain is normal")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "Certain foods, like raw seafood, unpasteurized dairy, and undercooked meats, should be avoided. Consult with your doctor for a comprehensive list. Generally, a balanced diet with a variety of nutrients is crucial.";
      texts.appendChild(p);
      speechSynthesis.speak(p);
    }
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
