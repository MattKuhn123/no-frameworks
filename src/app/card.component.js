export const html = () => {
  return `
    ${style()}
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Card component</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet. Quis vel eros donec ac odio tempor. Est ultricies integer quis auctor elit sed vulputate. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus.</p>
      </div>
    </div>
  `;
}

const style = () => {
  return `
    <style>
      #card {
        & p { color: blue; }
      }
    </style>
  `;
}