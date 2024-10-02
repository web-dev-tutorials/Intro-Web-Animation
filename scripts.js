//hero we are splitting the characters of h1 tag into spans.
const text = SplitType.create('#hero-text');


//this is the initial opacity animation
setTimeout(() => {
    gsap.fromTo(
        text.chars,
        {
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.06,
            duration: 2,
            ease: 'power4.out',
            onComplete: () => {
                try {
                    replaceOWithArrows();

                } catch (e) {
                    console.log('Home Page :', e);
                }
            }
        }
    );
}, 1000);



//here we are finding the character o and running the gsap animation.

function replaceOWithArrows() {
    // Get the character "o" from the text
    const oChar = text.chars.find(char => char.innerText === 'o');


    gsap.timeline().to(oChar, {
        opacity: 0,
        y: 100,
        duration: 0.5,
        ease: "back.out(1.7)"
    }).to(oChar, {
        opacity: 1,
        y: 0,
        color: '#ff6432',
        duration: 0.5,
        ease: "ease-in"
    }).to('#hero-text', {
        delay: 0.5,
        duration: 0.5,
        scale: 0.9
    })


}

