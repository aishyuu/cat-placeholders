import './style.css';
import pic_finder from './pic_finder';

function component() {
    const element = document.createElement('div');
    element.innerHTML = `
        <div class="content">
            <h1 class="headerText">Cat Holders</h1>
            <div class="dimensionInput">
                <div class="widthContainer">
                    <label for="width">Width</label>
                    <input type="number" name="width" id="width">
                </div>
                <div class="heightContainer">
                    <label for="height">Height</label>
                    <input type="number" name="height" id="height">
                </div>
            </div>
            <div class="buttonContainer">
                <button class="submitImage">Get Cat Image</button>
            </div>
            <div class="catContainer"></div>
        </div>
    `

    window.onload = function() {
        const btn = document.querySelector('.submitImage');
        btn.onclick = pic_finder;
    }
    return element;
}

document.body.appendChild(component());