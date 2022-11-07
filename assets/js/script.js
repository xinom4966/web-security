Array.prototype.shuffle = function() {
    var i = this.length, j, temp;
    if ( i === 0 ) return this;
    while ( --i ) {
        j = Math.floor( Math.random() * ( i + 1 ) );
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
}

const scrollToElement = function (el, ms) {
    const speed = (ms) ? ms : 600;
    $('html,body').animate({
        scrollTop: $(el).offset().top
    }, speed);
};

const dangers = {
    addiction: {
        title: 'Addiction to screens',
        img: 'assets/img/addiction.png',
        description: 'Screens can become very addictive if you use electronic devices for too long, however it can have negative effects on your physical and mental health. Prolonged exposure to electronic devices can lead to aggressive behaviors, the long term effects include: Speech delay, Cognitive impairment, Difficulty with problem-solving and creative thinking, Cyber bullying and exposure to predators, Body weight issues and poor bone health due to lack of physical activity, which later in life can add up to heart disease and other health conditions, Depression and anxiety.'
    },
    cyberbullying: {
        title: "Cyberbullying",
        img: 'assets/img/cyberbullying.png',
        description: 'Oxford Languages definition: the use of electronic communication to bully a person, typically by sending messages of an intimidating or threatening nature.\n' +
            'Cyberbullying spreads in social medias due to the anonymity they offer. Jokes, threats, any comment having an intimidating or threatening nature is considered cyberbullying. How to fight cyberbullying: on social medias there is often a “block” option where you can prevent any cyberbullies from messaging you, there are also numbers you can text to help you with your case (for example 50808).'
    },
    pegi18: {
        title: 'Inappropriate contents',
        img: 'assets/img/pegi-18.png',
        description: 'One of the worst dangers of the Internet, for many parents, is the idea that pornography could pop up and surprise their children. But parents may not realize that some kids are going online to seek out web porn, too.'
    },
    hacking: {
        title: 'Hacking',
        img: 'assets/img/hacking.png',
        description: 'Hacking is a term for designing the theft of digital information such as passwords, softwares, hardwares, etc… definition by oxford language: the gaining of unauthorized access to data in a system or computer. There are several ways to get hacked, the most common is to get infected by a computer virus when opening a shady website or application. How to prevent getting hacked: first you need to beware of shady emails asking you to click a link, second you need to be cautious with what you download on the internet.'
    },
    cyberPredators: {
        title: 'Cyber Predators',
        img: 'assets/img/cyberPredators.png',
        description: 'These days sexual and other predators often stalk children on the internet, taking advantage of their innocence, lack of adult supervision and abusing their trust. This can culminate in children being lured into dangerous personal encounters IRL. These predators lurk on social media and gaming platforms that appeal to children the same virtual venues where anonymity facilitates cyber bullying.'
    },
    phishing: {
        title: 'Phishing',
        img: 'assets/img/phishing.png',
        description: 'Is what cyber security professionals call the use of emails that try to trick people into clicking on malicious links or attachments. These can be especially difficult for kids to detect because often, the email will appear to be from someone legitimate, like a friend or family member, saying simply, "Hey thought you might like this!" This can also be done with using messaging apps or text messages'
    },
    scams: {
        title: 'Scams',
        img: 'assets/img/scams.png',
        description: 'Children are probably not going to fall for Nigerian princes offering them a million dollars, but they might fall for scams that offer things they value, such as free access to online games or special features. Young people are easy marks for scams because they have not yet learned to be wary. As with phishing, cyber criminals can use sites popular with children to identify potential victims, and then promise prizes in return for what they want like parents\' credit card information.'
    },
    identityTheft: {
        title: 'Identity theft',
        img: 'assets/img/identityTheft.png',
        description: 'Is a huge issue online, as the internet has provided thieves with more ways than ever to steal private identifying information. Children are among the most common targets for identity theft because of their clean records, so you should always be on the lookout for warning signs that your own child has been targeted.'
    },
    bewareWhatYouShare: {
        title: 'Beware what you share',
        img: 'assets/img/bewareWhatYouShare.png',
        description: 'The internet does not have a "Delete" key. Things that happen online, stay online. Forever. Anything your child puts online is nearly impossible to remove later. The dangers of social media are especially daunting. It is hard for teenagers in particular to consider how a party picture or Snapchat message could cause problems ten years down the road when they interview for a new job, or how a prospective mate might respond to personal content that they post to their social media profiles or other websites.\n'
    }
};

function closePopup() {
    document.getElementById("popup").style.visibility = "hidden";
}

function openPopup(type) {
    if (dangers[type]) {
        document.getElementById("modal_title").innerHTML = dangers[type].title;
        document.getElementById("modal_img").src = dangers[type].img;
        document.getElementById("modal_p").innerHTML = dangers[type].description;
        document.getElementById("popup").style.visibility = "visible";
    }
}

function generateDangers(elementId, number, randomize) {
    let listDangers = [];
    for (let dangerKey in dangers) {
        const danger = dangers[dangerKey];
        listDangers.push({
            id: dangerKey,
            title: danger.title,
            img: danger.img
        });
    }
    if (randomize)
        listDangers = listDangers.shuffle();
    if (number)
        listDangers = listDangers.slice(0, number);
    listDangers = listDangers.map(danger => `
        <div class="danger" data-tilt>
                <h2>${danger.title}</h2>
                <img src="${danger.img}" alt=""/>
                <br>
                <button class="show" onclick="openPopup('${danger.id}')">Show</button>
            </div>
    `);

    document.getElementById(elementId).innerHTML = listDangers.join("\n");
}

if (document.documentURI.includes('index.html'))
    generateDangers('dangers_container', 4);
else if (document.documentURI.includes('dangers.html'))
    generateDangers('dangers_container', null, true);
