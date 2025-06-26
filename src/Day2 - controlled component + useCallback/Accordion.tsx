import { useCallback, useRef, useState, type ReactNode, memo } from "react"

export interface QA {
  id: string,
  q: string,
  a: string
}

export function Accordion(props: { qAs: QA[] }): ReactNode {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = useCallback((id: string) => {
    setOpenId(id)
  }, [])
  //const toggle = (id: string) => { setOpenId(id) }

  return (
    <ul>
      {props.qAs.map((qa) => (<Row key={qa.id} qa={qa} open={openId === qa.id} onToggle={toggle}/>))}
    </ul>
  )
}

interface RowProps {
  qa: QA
  open: boolean;
  onToggle: (id: string) => void;
}

const Row = memo(({qa, open, onToggle}: RowProps) => {
  useRenderCount(qa.id);
  return (
    <li>
      <button aria-expanded={open} onClick={() => onToggle(qa.id)}>
        {qa.q}
      </button>
      {open && <section>{qa.a}</section>}
    </li>
  );
});

function useRenderCount(label: string) {
  const ref = useRef(0);
  console.log(`${label} render #${++ref.current}`);
}
