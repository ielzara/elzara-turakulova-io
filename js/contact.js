//===FOOTER===
createFooter();

//===MESSAGE FORM===

const messageForm = document.forms.leave_message;

//Visibility of "Messages"
function updateMessageVisibility() {
  const messageSection = document.getElementById('messages');
  const messageList = messageSection.querySelector('ul');
  if (messageList.children.length === 0) {
    messageSection.style.display = 'none';
  } else {
    messageSection.style.display = 'block';
  }
}

//MESSAGES display section
messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = event.target.usersName.value;
  const email = event.target.usersEmail.value;
  const message = event.target.usersMessage.value;
  console.log(name, email, message);

  const messageSection = document.getElementById('messages');
  const messageList = messageSection.querySelector('ul');
  const newMessage = document.createElement('li');
  newMessage.innerHTML = `<a href="mailto:${email} "><span>${message}</span></a>`;

  //EDIT button
  const editButton = document.createElement('button');
  editButton.innerText = 'Edit';
  editButton.setAttribute('type', 'button');
  editButton.classList.add('edit-button');

  editButton.addEventListener('click', (event) => {
    const span = newMessage.querySelector('span');
    const newText = prompt('Edit your message:', span.textContent);
    if (newText !== null && newText.trim() !== '') {
      span.textContent = newText;
    }
  });

  //REMOVE Button
  const removeButton = document.createElement('button');
  removeButton.innerText = 'remove';
  removeButton.setAttribute('type', 'button');
  removeButton.classList.add('remove-button');

  removeButton.addEventListener('click', (event) => {
    const entry = event.target.parentNode;
    entry.remove();
    updateMessageVisibility();
  });
  //Add buttons and append to li element
  newMessage.appendChild(editButton);
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  updateMessageVisibility();
  messageForm.reset();
});

//Hides "Messages" when page is loaded or refreshed
updateMessageVisibility();
