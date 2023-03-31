import { useState } from "react";

type LottoObject = {
    id: number;
    number: number;
    isXNumber: boolean;
};

export const Lotto = () => {
    const [numberList, setNumberList] = useState<LottoObject[]>([]);

    const generateUniqueNumber = (): number => {
        const newNumber = Math.floor(Math.random() * 34) + 1;
        if (
            numberList.some((lottoObject) => lottoObject.number === newNumber)
        ) {
            return generateUniqueNumber();
        }
        return newNumber;
    };

    const addMainNumber = () => {
        if (numberList.length < 7) {
            setNumberList([
                ...numberList,
                {
                    id: Date.now(),
                    number: generateUniqueNumber(),
                    isXNumber: false,
                },
            ]);
        }
    };

    const extraNumber = () => {
        if (numberList.length === 7) {
            setNumberList([
                ...numberList,
                {
                    id: Date.now(),
                    number: generateUniqueNumber(),
                    isXNumber: true,
                },
            ]);
        }
    };

    const resetButton = () => {
        setNumberList([]);
    };

    const handleSortNumbers = () => {
        const sortedNumbers = numberList
            .slice(0, 7)
            .sort(
                (lottoObject1, lottoObject2) =>
                    lottoObject1.number - lottoObject2.number
            );
        const xNumber = numberList.find((lottoObject) => lottoObject.isXNumber);
        if (xNumber) {
            sortedNumbers.push(xNumber);
        }
        setNumberList(sortedNumbers);
    };

    return (
        <div>
            <div>
                <button
                    className="resetB"
                    onClick={resetButton}
                >
                    -X-
                </button>
                <button
                    className="addB"
                    onClick={addMainNumber}
                >
                    Nytt tall
                </button>
                <button
                    className="addET"
                    onClick={extraNumber}
                >
                    Tilleggstall
                </button>
            </div>
            {
                <div className="lottoTallContainer">
                    {numberList.map((lottoObject, index) => (
                        <span
                            key={lottoObject.id}
                            className="fadeIn"
                        >
                            <button
                                className={`number ${
                                    index >= numberList.length - 1 &&
                                    numberList.length > 7
                                        ? "tilleggsTall"
                                        : "lotto"
                                }`}
                                onClick={() => {
                                    if (lottoObject.isXNumber) {
                                        handleSortNumbers();
                                    }
                                }}
                            >
                                {lottoObject.number}
                            </button>
                        </span>
                    ))}
                </div>
            }
        </div>
    );
};
