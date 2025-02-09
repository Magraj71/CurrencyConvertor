import React, { useId } from 'react';

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) => {
    const amountInputId = useId();

    return (
        <div className={`bg-black p-4 rounded-lg m-10 h-28 text-white text-sm flex items-center gap-4 ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-gray-400 mb-1 block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="w-full bg-transparent text-white outline-none py-1.5 border-b border-gray-500 focus:border-blue-400 transition"
                    type="number"
                    placeholder="Enter Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange?.(Number(e.target.value))}
                />
            </div>

            {/* Currency Selection Dropdown */}
            <div className="w-1/2 flex flex-col items-end">
                <label className="text-gray-400 mb-1">Currency Type</label>
                <select
                    className="w-full rounded-lg px-2 py-1 bg-gray-800 text-white cursor-pointer outline-none border border-gray-600 focus:border-blue-400 transition"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange?.(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency} className="bg-gray-700 text-white">
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default InputBox;
