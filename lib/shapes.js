class Shape {
    constructor(LogoColor, TextColor, Text) {
        this.LogoColor = LogoColor;
        this.TextColor = TextColor;
        this.Text = Text;
    }
}


class Circle extends Shape {
    constructor(LogoColor, TextColor, Text) {
        super(LogoColor, TextColor, Text);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.LogoColor}" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.TextColor}">${this.Text}</text>
        </svg>`;
    }
}


class Triangle extends Shape {
    constructor(LogoColor, TextColor, Text) {
        super(LogoColor, TextColor, Text);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="160,10 290,200 10,200" style="fill:${this.LogoColor};stroke:purple;stroke-width:1" />
        <text x="155" y="150" font-size="60" text-anchor="middle" fill="${this.TextColor}">${this.Text}</text>
        </svg>`;
    }
}


class Square extends Shape {
    constructor(LogoColor, TextColor, Text) {
        super(LogoColor, TextColor, Text);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.LogoColor}" />
        <text x="100" y="115" font-size="60" text-anchor="middle" fill="${this.TextColor}">${this.Text}</text>
        </svg>`;
    }
}


module.exports = { Circle, Triangle, Square };