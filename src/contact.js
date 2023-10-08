import '../dist/style.css';

export default function loadContact() {
    const contact = document.createElement('div');
    contact.classList.add("contact");

    const msg = document.createElement('h1');
    msg.textContent = "Contact Us!";

    const phoneNum = document.createElement('p');
    phoneNum.textContent = '📞 123 456 789';
    phoneNum.classList.add("phone-number");

    contact.appendChild(msg);
    contact.appendChild(phoneNum);

    return contact;
}