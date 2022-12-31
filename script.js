let DisplayAreaEl = document.getElementById('DisplayContent');
let CapsLockBoardEl = document.getElementById('CapsLockBoard');
let smallLetterBoardEl = document.getElementById('smallLetterBoard');
let numbersBoardEl = document.getElementById('numbersBoard');
let symbolsBoardEl = document.getElementById('symbolsBoard')

// Global veriables
let arr = []

CapsLockBoardEl.style.display = 'block';
smallLetterBoardEl.style.display = 'none';
numbersBoardEl.style.display = 'none';
symbolsBoardEl.style.display = 'none';

// function area

function addingLetter(e) {
    arr.push(e)
    DisplayAreaEl.innerText = arr.join('');
}

function BackSpaceFunction() {
    arr.pop()
    DisplayAreaEl.innerText = arr.join('');
}

function SmallLetterKeyBoard() {
    CapsLockBoardEl.style.display = 'none';
    smallLetterBoardEl.style.display = 'block';
    numbersBoardEl.style.display = 'none';
    symbolsBoardEl.style.display = 'none';
}

function CapsLockKeyBoard() {
    CapsLockBoardEl.style.display = 'block';
    smallLetterBoardEl.style.display = 'none';
    numbersBoardEl.style.display = 'none';
    symbolsBoardEl.style.display = 'none';
}

function NumberKeyBoard() {
    CapsLockBoardEl.style.display = 'none';
    smallLetterBoardEl.style.display = 'none';
    numbersBoardEl.style.display = 'block';
    symbolsBoardEl.style.display = 'none';
}

function SpecialCharacterKeyBoard() {
    CapsLockBoardEl.style.display = 'none';
    smallLetterBoardEl.style.display = 'none';
    numbersBoardEl.style.display = 'none';
    symbolsBoardEl.style.display = 'block';
}