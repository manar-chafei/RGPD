import "./App.css";
import image from "./img/Exp_bw.png";
import exp from "./img/Exp_rgpd.png";
import { useState, useRef } from "react";

function App() {
  const humanMessage = useRef();
  const botmessage = useRef();
  const input = useRef();
  
  const col = useRef();

  const date = new Date();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [time, setTime] = useState(`${hours}:${seconds}`); 
  const [dateTime, setDateTime] = useState(
    `${days[day]}, ${months[month]} ${year}`
  ); 
  const checkStatus = () => {
    let isActive = true;
  
    const currentDate = date.getDate();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
  
    if (currentYear === 2023 && currentMonth === 11 && currentDate > 7) {
      isActive = false;
    }
    if (isActive) {
      col.innerHTML = "Active";
      col.style.color = "green";
    } else {
      col.innerHTML = "Not Active";
      col.style.color = "red";
    }
  };




  const handleInput = () => {
    const botMessage = document.querySelector("#message1");
    const userMessage = document.querySelector("#message2");
    const inputRef = input.current;
    const getHumanMessage = humanMessage.current;
    const getBotMessage = botmessage.current;

    let badwords = ["putain|mauvais|stupide|inutile|salope|fou|non-sens"];
    let words = new RegExp(badwords);
    if (words.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Entrain d'écrire...";
      setTimeout(() => {
        getBotMessage.innerText = "S'il vous plaît, n'utilisez pas de gros mots"; 
        inputRef.value = ""; 
      }, 2000);
    }
    let welcome = [
      "salut|bonjour|Bonjour|hé|sup|yo|wassup|quoi de neuf|salut|salutations|bonjour|bon après-midi|bonsoir",
    ];
    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Entrain d'écrire...";
      setTimeout(() => {
        getBotMessage.innerText = "Bonjour, comment vas-tu aujourd'hui ?"; 
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = "";
      }, 2000);
    }
    let bye = ["au revoir|Au revoir|au revoir|à plus tard|cya|bonne nuit|au revoir"];
    let words3 = new RegExp(bye);
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Entrain d'écrire...";
      setTimeout(() => {
        getBotMessage.innerText = "Au revoir passez une bonne journée";
        inputRef.value = ""; 
      }, 2000);
      setTimeout(() => {
        status.innerText = "Not active";
        status.style.color = "red";
      }, 5000);
    }
    let thanks = [
      "Merci|merci|merci|merci beaucoup|Merci beaucoup",
    ];
    let words4 = new RegExp(thanks);
    if (words4.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Entrain d'écrire...";
      setTimeout(() => {
        getBotMessage.innerText = "Je vous en prie";
        inputRef.value = ""; 
      }, 2000);
    }
    let how = [
      "Comment allez-vous|comment allez-vous|comment allez-vous aujourd'hui|comment allez-vous aujourd'hui|Comment allez-vous|comment allez-vous",
    ];
    let words5 = new RegExp(how);
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Entrain d'écrire...";
      setTimeout(() => {
        getBotMessage.innerText = "Je vais bien merci";
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = ""; 
      }, 2000);
    }
    let good = [
      "C'est bien|Ça a l'air bien|ça a l'air génial|ça a l'air bien|Super|super|ça a l'air bien|ça a l'air bien|Bien|bien",
    ];
    let words6 = new RegExp(good);
    if (words6.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Entrain d'écrire...";
      setTimeout(() => {
        getBotMessage.innerText = "😁";
        inputRef.value = "";
      }, 1000);
    }

    let response = [
      "Je vais bien|Je vais bien|Je vais bien aujourd'hui|Je vais bien aujourd'hui|je vais bien|je vais bien|Je vais bien|Je vais bien|Je vais bien|je vais bien|génial |Super",
    ];
    let words7 = new RegExp(response);
    if (words7.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Entrain d'écrire...";
      setTimeout(() => {
        getBotMessage.innerText = "C'est bon";
        inputRef.value = ""; 
      }, 2000);
    }

    let nameAsk = [
      "Quel est ton nom|quel est ton nom|Quel est ton nom|quel est ton nom",
    ];
    let words8 = new RegExp(nameAsk);
    if (words8.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Entrain d'écrire...";
      setTimeout(() => {
        getBotMessage.innerText = "Je m'appelle RGPD Express de Gpt";
        inputRef.value = ""; 
      }, 2000);
    }

    let owner = [
      "Qui est le propriétaire|qui est le propriétaire|Qui est le propriétaire de ce bot|qui est le propriétaire de ce bot|Qui vous a créé|qui vous a créé|Qui est votre créateur|Qui vous a créé|qui est votre créateur|qui est votre propriétaire|Qui est votre propriétaire",
    ];
    let words9 = new RegExp(owner);
    if (words9.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Entrain d'écrire...";
      setTimeout(() => {
        getBotMessage.innerText = "Le propriétaire de ce bot est Treasure";
        inputRef.value = "";
      }, 2000);
    }

    let owner2 = [
      "Qui est le trésor|qui est le trésor|Qui est le trésor|qui est le trésor",
    ];
    let words10 = new RegExp(owner2);
    if (words10.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Entrain d'écrire...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Treasure est un programmeur basé sur ReactJS et NodeJS";
        inputRef.value = ""; 
      }, 2000);
    }

    let ageAsk = [
      "Quel est ton âge|quel est ton âge|Quel est ton âge|quel est ton âge|Quel âge as-tu|quel âge as-tu",
    ];
    let words11 = new RegExp(ageAsk);
    if (words11.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Entrain d'écrire...";
      setTimeout(() => {
        getBotMessage.innerText = "J'ai 1 jour";
        inputRef.value = "";
      }, 2000);
    }
    let q1 = [
      "Qu'est-ce que le RGPD|RGPD|la signification de RGPD|Qu'est-ce que le RGPD?|RGPD?|la signification de RGPD?|Qu'est-ce que le rgpd|rgpd|la signification de rgpd|Qu'est-ce que le rgpd?|rgpd?|la signification de rgpd?",
    ]; 
    let rep1 = new RegExp(q1);
    if (rep1.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Entrain d'écrire...";
      setTimeout(() => {
        getBotMessage.innerText = "Le RGPD, ou Règlement Général sur la Protection des Données, est une législation de l'Union européenne entrée en vigueur le 25 mai 2018. Il vise à renforcer la protection des données personnelles des individus au sein de l'UE.";
        inputRef.value = ""; 
      }, 2000);
    }
    let q2 = [
      "Quels sont les principes fondamentaux du RGPD|Quels sont les principes du RGPD|les principes du RGPD|Quels sont les principes fondamentaux de RGPD|Quels sont les principes de RGPD|les principes de RGPD|Quels sont les principes fondamentaux du RGPD?|Quels sont les principes du RGPD?|les principes du RGPD?|Quels sont les principes fondamentaux de RGPD?|Quels sont les principes de RGPD?|les principes de RGPD?|Quels sont les principes fondamentaux du rgpd|Quels sont les principes du rgpd|les principes du rgpd|Quels sont les principes fondamentaux de rgpd|Quels sont les principes de rgpd|les principes de rgpd",
    ]; 
    let rep2 = new RegExp(q2);
    if (rep2.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Entrain d'écrire...";
      setTimeout(() => {
        getBotMessage.innerText = "Les principaux principes du RGPD comprennent la transparence, la légitimité du traitement des données, la minimisation des données, l'exactitude, la limitation de la conservation, l'intégrité et la confidentialité.";
        inputRef.value = ""; 
      }, 2000);
    }
    let q3 = [
      "Quelles sont les données personnelles couvertes par le RGPD|Quelles sont les données personnelles couvertes par le RGPD?|les données personnelles couvertes par le RGPD|les données personnelles couvertes par le rgpd",
    ]; 
    let rep3 = new RegExp(q3);
    if (rep3.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Entrain d'écrire...";
      setTimeout(() => {
        getBotMessage.innerText = "Le RGPD couvre toutes les informations permettant d'identifier directement ou indirectement une personne physique, telles que les noms, adresses, identifiants en ligne, données de localisation, etc.";
        inputRef.value = ""; 
      }, 2000);
    }
    let q4 = [
      "Qui est concerné par le RGPD|Qui est concerné par le RGPD?",
    ];
    let rep4 = new RegExp(q4);
    if (rep4.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Entrain d'écrire...";
      setTimeout(() => {
        getBotMessage.innerText = "Le RGPD s'applique à toute organisation traitant des données personnelles de résidents de l'Union européenne, qu'elle soit située dans l'UE ou non. Cela inclut les entreprises, les organismes gouvernementaux, les associations à but non lucratif, etc.";
        inputRef.value = ""; 
      }, 2000);
    }
    let q5 = [
      "Quelles sont les sanctions en cas de non-conformité au RGPD",
    ];
    let rep5 = new RegExp(q5);
    if (rep5.test(document.querySelector("#input").value)) {
      
      getBotMessage.innerText = "Entrain d'écrire...";
      setTimeout(() => {
        getBotMessage.innerText = "Les sanctions en cas de non-conformité au RGPD peuvent inclure des amendes pouvant atteindre 20 millions d'euros ou 4 % du chiffre d'affaires annuel mondial de l'entreprise, selon le montant le plus élevé.",        inputRef.value = ""; 
      }, 2000);
    }
    let q6 = [
      "Quelle est la différence entre un responsable du traitement et un sous-traitant en vertu du RGPD",
    ];
    let rep6 = new RegExp(q6);
    if (rep6.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Entrain d'écrire...";
      setTimeout(() => {
        getBotMessage.innerText = "Le responsable du traitement est l'entité qui détermine les finalités et les moyens du traitement des données, tandis que le sous-traitant traite les données pour le compte du responsable.",        inputRef.value = ""; 
      }, 2000);
    }
    let q7 = [
      "Doit-on obtenir le consentement pour traiter des données personnelles en vertu du RGPD" ];
    let rep7 = new RegExp(q7);
    if (rep7.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Entrain d'écrire...";
      setTimeout(() => {
        getBotMessage.innerText = "Le consentement est l'une des bases légales pour le traitement des données, mais il existe d'autres bases légales telles que l'exécution d'un contrat, le respect d'une obligation légale, la protection des intérêts vitaux, l'exécution d'une mission d'intérêt public, ou l'intérêt légitime du responsable du traitement.",        inputRef.value = ""; 
      }, 2000);
    }
  let q8 = [
    "Qu'est-ce qu'une analyse d'impact sur la protection des données (AIPD)" ];
  let rep8 = new RegExp(q8);
  if (rep8.test(document.querySelector("#input").value)) {
    getBotMessage.innerText = "Entrain d'écrire...";
    setTimeout(() => {
      getBotMessage.innerText = "Une AIPD est une évaluation systématique des risques pour la vie privée afin de garantir que les activités de traitement des données respectent le RGPD.",        inputRef.value = ""; 
    }, 2000);
  }
  let q9 = [
    "Comment une entreprise peut-elle assurer la conformité au RGPD" ];
  let rep9 = new RegExp(q9);
  if (rep9.test(document.querySelector("#input").value)) {
    getBotMessage.innerText = "Entrain d'écrire...";
    setTimeout(() => {
      getBotMessage.innerText = "Assurez-vous que le personnel est informé et conscient des principes et des exigences du RGPD. Organisez des sessions de formation régulières pour sensibiliser les employés à la protection des données.",        inputRef.value = ""; 
    }, 2000);
  }
  let q10 = [
    "Quel est le rôle d'un délégué à la protection des données (DPO)" ];
  let rep10 = new RegExp(q10);
  if (rep10.test(document.querySelector("#input").value)) {
    getBotMessage.innerText = "Entrain d'écrire...";
    setTimeout(() => {
      getBotMessage.innerText = "Le DPO est chargé de veiller à la conformité au RGPD au sein d'une organisation, de conseiller sur les questions de protection des données et de servir de point de contact avec l'autorité de contrôle.",        inputRef.value = "";
    }, 2000);
  }
  let q11 = [
    "Quand une entreprise est-elle tenue de notifier une violation de données" ];
  let rep11 = new RegExp(q11);
  if (rep11.test(document.querySelector("#input").value)) {
    getBotMessage.innerText = "Entrain d'écrire...";
    setTimeout(() => {
      getBotMessage.innerText = "Une entreprise est tenue de notifier une violation de données à l'autorité de contrôle dans les 72 heures suivant sa découverte, sauf si la violation n'est pas susceptible de créer un risque élevé pour les droits et libertés des personnes concernées.",        inputRef.value = ""; 
    }, 2000);
  }
  let q12 = [
    "Comment le RGPD impacte-t-il le transfert de données hors de l'Union européenne" ];
  let rep12 = new RegExp(q12);
  if (rep12.test(document.querySelector("#input").value)) {
    getBotMessage.innerText = "Entrain d'écrire...";
    setTimeout(() => {
      getBotMessage.innerText = "Le RGPD impose des restrictions sur le transfert de données personnelles en dehors de l'UE. Des mécanismes tels que les clauses contractuelles types, les règles d'entreprise contraignantes et le bouclier de protection des données peuvent être utilisés pour assurer un niveau adéquat de protection.",        inputRef.value = "";
    }, 2000);
  }
  let q13 = [
    "Quelle est la durée de conservation des données personnelles selon le RGPD" ];
  let rep13 = new RegExp(q13);
  if (rep13.test(document.querySelector("#input").value)) {
    getBotMessage.innerText = "Entrain d'écrire...";
    setTimeout(() => {
      getBotMessage.innerText = "Les données personnelles doivent être conservées pendant une durée limitée et proportionnée à la finalité du traitement. Les entreprises doivent déterminer et documenter cette durée de conservation.",        inputRef.value = ""; 
    }, 2000);
  }
  let q14 = [
    "Quels sont les risques pour les entreprises en cas de non-conformité au RGPD" ];
  let rep14 = new RegExp(q14);
  if (rep14.test(document.querySelector("#input").value)) {
    getBotMessage.innerText = "Entrain d'écrire...";
    setTimeout(() => {
      getBotMessage.innerText = "Les risques pour les entreprises en cas de non-conformité au RGPD incluent des amendes substantielles, des dommages à la réputation, la perte de confiance des clients et partenaires, et des actions en justice de la part des individus concernés.",        inputRef.value = ""; 
    }, 2000);
  }
  let q15 = [
    "Comment le RGPD encourage-t-il la protection des données dès la conception et par défaut " ];
  let rep15 = new RegExp(q15);
  if (rep15.test(document.querySelector("#input").value)) {
    getBotMessage.innerText = "Entrain d'écrire...";
    setTimeout(() => {
      getBotMessage.innerText = "Le RGPD encourage l'intégration de la protection des données dès la conception des systèmes et des processus (privacy by design) ainsi que la prise en compte de la protection des données par défaut, limitant ainsi le traitement des données au strict nécessaire.",        inputRef.value = "";
    }, 2000);
  }
  let q16 = [
    "Qu'est-ce qu'un registre des activités de traitement des données" ];
  let rep16 = new RegExp(q16);
  if (rep16.test(document.querySelector("#input").value)) {
    getBotMessage.innerText = "Entrain d'écrire...";
    setTimeout(() => {
      getBotMessage.innerText = "Un registre des activités de traitement des données est un document interne où une entreprise doit consigner ses activités de traitement de données, y compris les finalités du traitement, les catégories de données, les destinataires, et les mesures de sécurité.",        inputRef.value = ""; 
    }, 2000);
  }
  let q17 = [
    "Le RGPD s'applique-t-il uniquement aux grandes entreprises" ];
  let rep17 = new RegExp(q17);
  if (rep17.test(document.querySelector("#input").value)) {
    getBotMessage.innerText = "Entrain d'écrire...";
    setTimeout(() => {
      getBotMessage.innerText = "Non, le RGPD s'applique à toutes les organisations, quelle que soit leur taille, qui traitent des données personnelles de résidents de l'Union européenne.",        inputRef.value = ""; 
    }, 2000);
  }
  let q18 = [
    "Comment les entreprises doivent-elles réagir aux demandes d'accès aux données personnelles des individus" ];
  let rep18 = new RegExp(q18);
  if (rep18.test(document.querySelector("#input").value)) {
    getBotMessage.innerText = "Entrain d'écrire...";
    setTimeout(() => {
      getBotMessage.innerText = "Les entreprises doivent répondre aux demandes d'accès dans un délai d'un mois, en fournissant les informations demandées et en expliquant les droits des individus, y compris le droit de rectification et le droit d'effacement.",        inputRef.value = ""; 
    }, 2000);
  }
  let q19 = [
    "Comment le RGPD affecte-t-il le marketing en ligne et la collecte de consentement pour les cookies" ];
  let rep19 = new RegExp(q19);
  if (rep19.test(document.querySelector("#input").value)) {
    getBotMessage.innerText = "Entrain d'écrire...";
    setTimeout(() => {
      getBotMessage.innerText = "Le RGPD a un impact significatif sur le marketing en ligne et la collecte de consentement pour les cookies. Les principaux points incluent.Le RGPD exige un consentement clair et explicite avant de collecter des données via des cookies.Les sites web doivent mettre en place des bannières de consentement transparentes expliquant l'objectif de la collecte de données.Les utilisateurs ont le droit de refuser (opt-out) ou d'accepter activement (opt-in) les cookies non essentiels.Les durées de conservation des cookies doivent être définies de manière appropriée.Les utilisateurs ont le droit de retirer leur consentement à tout moment.La transparence sur le partage de données avec des tiers à des fins publicitaires est essentielle.Le profilage automatisé, y compris celui basé sur les cookies, est réglementé.",        inputRef.value = ""; 
    }, 2000);
  }
  getHumanMessage.innerText = inputRef.value; 
};
  return (
    <div className="App" onLoad={checkStatus}>
      <div className="exp">
              <img src={exp} alt="" />
            </div>
      <div className="wrapper">
      
        <div className="content">
          <div className="header">
          <div className="img">
              <img src={image} alt="" />
            </div>
            <div className="right">
              <div className="name">Gpt's RGPD Express</div>
              <div className="status">Active</div>
            </div>
          </div>
          <div className="main">
            <div className="main_content">
              <div className="messages">
                <div
                  className="bot-message"
                  id="message1"
                  ref={botmessage}
                ></div>
                <div
                  className="human-message"
                  id="message2"
                  ref={humanMessage}
                ></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="btm">
              <div className="input">
                <input
                  type="text"
                  id="input"
                  placeholder="Ecrir vote message"
                  ref={input}
                />
              </div>
              <div className="btn">
                <button onClick={handleInput}>
                  <i className="fas fa-paper-plane"></i>Envoyer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
