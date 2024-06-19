export const pickRandomColor = () => {
    const x = ['ddfff7','93e1d8','ffa69e','aa4465','462255']
    return x[Math.floor(Math.random() * x.length)];
}