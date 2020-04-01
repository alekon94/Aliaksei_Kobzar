class Canvas {
    constructor(txtFile) {
        this._txtfile = txtFile;
        this._canvas = [];
    }

    C(width, height) {
        let arr = [];
        if (Number(width), Number(height)) {
            for (let i = 0; i < height + 2; i++) {
                arr[i] = [];
                for (let j = 0; j < width + 2; j++) {
                    if (i == 0 || i == height + 1) {
                        arr[i][j] = '-';
                    } else {
                        if (j == 0 || j == width + 1) {
                            arr[i][j] = '|';
                        } else {
                            arr[i][j] = ' ';
                        }
                    }
                }
            }
            this._canvas = JSON.stringify(arr);
            return this._canvas;
        } else {
            document.body.innerHTML = '';
            return document.body.innerHTML += '<pre>' + 'Incorrect values!';
        }
    }


    L(x1, y1, x2, y2) {
        if (this.fieldCheck(this._canvas)) {
            let field = JSON.parse(this._canvas);
            if (x1 >= 1 && x1 <= field[0].length - 2 && y1 >= 1 && y1 <= field.length - 2 &&
                x2 >= 1 && x2 <= field[0].length - 2 && y2 >= 1 && y2 <= field.length - 2 &&
                (x1 == x2 || y1 == y2)) {
                for (let i = 0; i < field.length; i++) {
                    if (i != 0 && i != field.length - 1) {
                        for (let j = 0; j < field[i].length; j++) {
                            if (y1 == y2) {
                                if (((i == y1 && field[i][j] == ' ' && j >= x1 && j <= x2) && x1 < x2) ||
                                    ((i == y1 && field[i][j] == ' ' && j <= x1 && j >= x2) && x1 > x2)) {
                                    field[i][j] = 'x';
                                }
                            } else if (x1 == x2) {
                                if (((j == x1 && field[i][j] == ' ' && i >= y1 && i <= y2) && y1 < y2) ||
                                    ((j == x1 && field[i][j] == ' ' && i <= y1 && i >= y2) && y1 > y2)) {
                                    field[i][j] = 'x';
                                }
                            }
                        }
                    }
                }
                this._canvas = JSON.stringify(field);
            } else {
                this._canvas = [];
            }
        }


    }


    R(x1, y1, x2, y2) {
        if (this.fieldCheck(this._canvas)) {
            this.L(x1, y1, x2, y1);
            this.L(x2, y1, x2, y2);
            this.L(x2, y2, x1, y2);
            this.L(x1, y2, x1, y1);
        }
    }

    B(x, y, c) {
        if (this.fieldCheck(this._canvas)) {
            let field = JSON.parse(this._canvas);
            if (x >= 1 && x <= field[0].length && y >= 1 && y <= field.length) {
                x += 1;
                y += 1;
                const point = {x, y};
                const queue = [];
                const visitedPixels = {};
                queue.push(point);
                if (x >= 1 && x <= field[0].length && y >= 1 && y <= field.length) {
                    while (queue.length) {
                        let {x, y} = queue.pop();
                        const pixelKey = `${x}-${y}`;

                        if (
                            (x >= 1 && x <= field[0].length && y >= 1 && y <= field.length &&
                                !visitedPixels[pixelKey])
                        ) {
                            const pixel = this.getSymbol(x, y);
                            visitedPixels[pixelKey] = true;
                            if (pixel != 'x' && pixel != '|' && pixel != '-' || x == 1 && y == 1) {
                                this.setColor(x, y, c);
                                queue.push({x: x + 1, y});
                                queue.push({x: x - 1, y});
                                queue.push({x, y: y + 1});
                                queue.push({x, y: y - 1});
                            }
                        }
                    }
                }
                field = JSON.parse(this._canvas);
                this._canvas = JSON.stringify(field);
                return this._canvas;
            } else {
                this._canvas = [];
            }
        }

    }

    textField(field) {
        let textField = JSON.parse(field);
        document.body.innerHTML = '';
        for (let i = 0; i < textField.length; i++) {
            document.body.innerHTML += '<pre>' + textField[i];
        }
    }

    getSymbol(x, y) {
        let field = JSON.parse(this._canvas);
        return field[y - 1][x - 1];
    }

    setColor(x, y, c) {
        let field = JSON.parse(this._canvas);
        field[y - 1][x - 1] = c;
        this._canvas = JSON.stringify(field);
    }

    fieldCheck(field) {
        if (field.length == 0) {
            document.body.innerHTML += '<pre>' + 'Error!';
        } else {
            return field;
        }
    }

    init() {
        const logFileText = async file => {
            const response = await fetch(file)
            const text = await response.text()
            const arr = text.split('\n');
            for (let i = 0; i < arr.length; i++) {
                arr[i] = arr[i].split(' ');
                switch (arr[i][0]) {
                    case 'C':
                        this.C(Number(arr[i][1]), Number(arr[i][2]));
                        break;
                    case 'L':
                        this.L(Number(arr[i][1]), Number(arr[i][2]), Number(arr[i][3]), Number(arr[i][4]));
                        break;
                    case 'R':
                        this.R(Number(arr[i][1]), Number(arr[i][2]), Number(arr[i][3]), Number(arr[i][4]));
                        break;
                    case 'B':
                        this.B(Number(arr[i][1]), Number(arr[i][2]), String(arr[i][3]));
                        break;
                    default:
                        document.body.innerHTML = '<pre>' + 'Incorrect values!';
                        break;
                }
            }
            if (this.fieldCheck(this._canvas)) {
                this.textField(this._canvas);
            }
        }
        logFileText(this._txtfile);
    }
}

let field = new Canvas('input');
field.init();

