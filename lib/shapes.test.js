const { Circle, Triangle, Square } = require('./shapes')


describe('Triangle', () => {
    it('should create a shape that matches the specifications entered by the user', () => {
        const goodTriangle = (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="160,10 290,200 10,200" style="fill:${this.LogoColor};stroke:purple;stroke-width:1" />
        <text x="155" y="150" font-size="60" text-anchor="middle" fill="${this.TextColor}">${this.Text}</text>
        </svg>`)
        const shape = new Triangle();
        expect(shape.render()).toEqual(goodTriangle);
    })

})

describe('Circle', () => {
    it('should create a shape that matches the specifications entered by the user', () => {
        const goodCircle = (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.LogoColor}" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.TextColor}">${this.Text}</text>
        </svg>`)
        const shape = new Circle();
        expect(shape.render()).toEqual(goodCircle);
    })

})

describe('Square', () => {
    it('should create a shape that matches the specifications entered by the user', () => {
        const goodSquare = (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.LogoColor}" />
        <text x="100" y="115" font-size="60" text-anchor="middle" fill="${this.TextColor}">${this.Text}</text>
        </svg>`)
        const shape = new Square();
        expect(shape.render()).toEqual(goodSquare);
    })

})