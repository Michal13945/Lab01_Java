const asyncAdd = async (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('Argumenty muszą mieć typ number!')
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 100)
    })
}

const addMany = async (...args) => {
    let suma = 0;
    let licznikOperacjii = 0;
    for (let arg of args) {
        licznikOperacjii++;
        suma = await asyncAdd(suma, arg);
    }
    return { suma, licznikOperacjii };
};

const calcPerformance = async (funkcja) => {
    const start = performance.now();
    const { suma, licznikOperacjii } = await funkcja();
    const koniec = performance.now();
    const czasWykonania = koniec - start;
    console.log('Czas wykonania:', czasWykonania, 'milisekund');
    console.log('Ilość operacji asynchronicznych:', licznikOperacjii);
    console.log('Wynik dodawania:', suma);
};

const liczby = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

calcPerformance(async () => {
    return await addMany(...liczby);
});