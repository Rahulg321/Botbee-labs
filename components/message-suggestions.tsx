interface MessageSuggestionsProps {
  onSelect: (suggestion: string) => void;
}

export function MessageSuggestions({ onSelect }: MessageSuggestionsProps) {
  const suggestions = [
    "Explain the content of chatbot",
    "Write a summary on xyz",
    "Explain the content of chatbot",
  ];

  return (
    <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          onClick={() => onSelect(suggestion)}
          className="px-4 py-2 text-sm bg-muted rounded-full whitespace-nowrap hover:bg-muted/80"
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
}
