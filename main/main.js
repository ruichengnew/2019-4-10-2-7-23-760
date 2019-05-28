module.exports = function main(inputs) {
    let price = 0;
    if (inputs.distance < 2) {
        price += 6 + 0.25 * inputs.parkTime;
    } else if (inputs.distance >= 2 && inputs.distance < 8) {
        price += 6 + (inputs.distance - 2) * 0.8 + 0.25 * inputs.parkTime;
    } else {
        price +=
            6 +
            6 * 0.8 +
            (inputs.distance - 8) * (0.8 * (1 + 0.5)) +
            0.25 * inputs.parkTime;
    }
    return parseInt(price.toFixed(0));
};
