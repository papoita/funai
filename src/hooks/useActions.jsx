import { useDebugValue, useState } from "react";

export default function useAction(initialState) {
const{setResults, like, thumbsDown, lightBulb} = initialState

  const [currentLike, setCurrentLike] = useState(like || false);
  const [currentThumbsDown, setCurrentThumbsDown] = useState(thumbsDown || false);
  const [currentLightBulb, setCurrentLightBulb] = useState(lightBulb || false);

  function handleLike(id) {
    setCurrentLike(!like);
    setResults(prevResults=> {
      const promptObj = prevResults.find(el=>el.id===id)
      const likedPromptObj = {...promptObj, like: !like}
      return [...prevResults, likedPromptObj]
    })
  }
  function handleThumbsDown() {
    setCurrentThumbsDown(!thumbsDown);
  }
  function handleLightBulb() {
    setCurrentLightBulb(!lightBulb);
  }

  useDebugValue("useActions");
  useDebugValue(like ? "liked" : "")

  return {
    currentLike,
    currentThumbsDown,
    currentLightBulb,
    handleLike,
    handleThumbsDown,
    handleLightBulb,
  };
}
