import { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';
import './FAQItem.css';

export default function FAQItem({ question, answer, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button
        className="faq-item__question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="faq-item__icon">
          {isOpen ? <HiMinus /> : <HiPlus />}
        </span>
      </button>
      <div className="faq-item__answer-wrap">
        <div className="faq-item__answer">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
