javascript
class Building {
	  constructor(sqft) {
		      if (this.constructor === Building) {
			            throw new Error("Cannot instantiate from Building class");
			          }
		      this._sqft = sqft;
		    }

	  get sqft() {
		      return this._sqft;
		    }

	  evacuationWarningMessage() {
		      throw new Error("You have to override this method!");
		    }
}
