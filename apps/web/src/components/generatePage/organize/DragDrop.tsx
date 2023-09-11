import { useLayerStore } from '@/store/layerStore'
import { useEffect, useState } from 'react'
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd'
import LayerButton from './LayerButton'

const DragDrop = () => {
  const { layers: items, splitLayer: setItems } = useLayerStore()

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return
    const sourceKey = source.index
    const destinationKey = destination.index
    setItems(sourceKey, destinationKey)
  }

  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true))

    return () => {
      cancelAnimationFrame(animation)
      setEnabled(false)
    }
  }, [])

  if (!enabled) {
    return null
  }

  const DragDropContextType: any = DragDropContext
  const DroppableType: any = Droppable
  const DraggableType: any = Draggable

  return (
    <div className="hiddenScrollbar h-fit overflow-y-auto px-0.5 md:h-[calc(100vh-175px)]">
      <DragDropContextType onDragEnd={onDragEnd}>
        <DroppableType droppableId="leftSide" className="hiddenScrollbar">
          {(provided: any) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <div className="relative">
                {items.map((item: any, index: any) => (
                  <DraggableType key={item.id} draggableId={item.id} index={index}>
                    {(provided: any) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <LayerButton key={index} layer={item} />
                      </div>
                    )}
                  </DraggableType>
                ))}
                {provided.placeholder}
              </div>
            </div>
          )}
        </DroppableType>
      </DragDropContextType>
    </div>
  )
}

export default DragDrop
