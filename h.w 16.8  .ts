interface IFly{
	
	Fly(speed: number): void;
	Land(): boolean;

}

class Airplan implements IFly{
	Fly(){
	console.log("speed");
	};

	Land() {
		return true;
	};
 pilot:string = "Eli";
 company:string="Elal";
 destination: string = "Israel"; 

};

class Bird implements IFly{

	Fly(){
	console.log("speed");
	};

	Land() {
		return true;
	};

 public type:string="hawk";
 public age:number=4;
 public color: string = "black";


};

class Kite implements IFly {
	Fly(): void {
		console.log("speed");
	};

	Land(): boolean {
		return true;
	};


	color: string = "red";
	price: number = 100;

};


function createIFly() :any {
	let a: number;
	a = Math.floor(Math.random() * 3);

	console.log(a);

	let obj: IFly;

	if (a == 0) {
		obj = new Airplan();
	}
	if (a == 1) {
		obj = new Kite();
	}
	if (a == 2) {
		obj = new Bird();
	}

	return obj;
	
};

let IFly: IFly[] = new Array<IFly>(10);

for (let i = 0; i<IFly.length; i++){
	IFly[i] = createIFly();
	IFly[i].Fly(10);
	console.log(IFly[i].Land());
};
console.log(IFly);


