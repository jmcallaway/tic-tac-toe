// contains logic for rendering view

export default class GameView {
	constrictor(root) {
		this.root = root;
		this.root.innerHTML = `
      <div class="header">
        <div class="header__turn">
          X's turn
        </div>
        <div class="header__status">
          In Progress
        </div>
        <button type="button" class="header__restart">
          <1 class="material-icons">refresh</i>
        </button>
      </div>
    `;
	}
}
