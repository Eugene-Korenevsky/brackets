module.exports = function check(str, bracketsConfig) {
    let map = new Map();
    for (let i = 0; i < bracketsConfig.length; i++) {
        let conf = bracketsConfig[i];
        let last = conf[1];
        map.set(last, bracketsConfig[i]);

    }
    if (str.length > 1) {
        for (let i = 1; i < str.length; i++) {
            if (map.has(str[i])) {
                let a = map.get(str[i]);
                if (a[0] === a[1]) {
                    if (str[i - 1] == a[0]) {
                        if (i != 1) {
                            let after = str.slice(i + 1, str.length);
                            let before = str.slice(0, i - 1);
                            let newStr = before + after;
                            return check(newStr, bracketsConfig);
                        } else {
                            let newStr = str.slice(i, str.length - 1);
                            if (newStr.length < 1) return true;
                            else return check(newStr, bracketsConfig);

                        }
                    } else if (str[i + 1] == a[0]) {
                        let after = str.slice(i + 2, str.length);
                        let before = str.slice(0, i);
                        let newStr = before + after;
                        return check(newStr, bracketsConfig);
                    }

                } else {
                    if (i < 1) {
                        console.log("un");
                        return false;
                    }
                    if (str[i - 1] == a[0]) {
                        if (i != 1) {
                            let after = str.slice(i + 1, str.length);
                            let before = str.slice(0, i - 1);
                            let newStr = before + after;
                            return check(newStr, bracketsConfig);
                        } else {
                            let newStr = str.slice(i + 1, str.length);
                            if (newStr.length < 1) {
                                return true;
                            } else {
                                return check(newStr, bracketsConfig);
                            }

                        }
                    } else {
                        return false;
                    }
                }
            } else {}
        }
        return false;
    } else return false;
}