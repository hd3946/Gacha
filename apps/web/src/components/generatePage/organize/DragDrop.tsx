import AddNewLayerButton from '@/components/button/organize/AddNewLayerButton'
import useAnimation from '@/hooks/useAnimationFrame'
import { useLayerFocusStore, useLayerStore } from '@/store/layerStore'
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd'
import LayerButton from './LayerButton'

const DragDrop = () => {
  const { layers: items, splitLayer: setItems } = useLayerStore()
  const { divFocus, handleFocus } = useLayerFocusStore()

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return
    const sourceKey = source.index
    const destinationKey = destination.index
    setItems(sourceKey, destinationKey)
  }

  if (!useAnimation) {
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
              <div className="hiddenScrollbar relative">
                {items.map((item: any, index: any) => (
                  <DraggableType key={item.id} id={index} draggableId={item.id} index={index}>
                    {(provided: any) => (
                      <div
                        id={index}
                        onClick={() => handleFocus(index)}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <LayerButton layer={item} focus={divFocus[index]} />
                        <div
                          className={`${
                            divFocus[index] ? 'visible' : 'hidden'
                          } relative -mb-2 mt-1 flex w-full flex-col items-center justify-center`}>
                          <div className="h-[5px] w-[1px] bg-gray-300 dark:bg-gray-500"></div>
                          <AddNewLayerButton />
                          {index != items.length - 1 && (
                            <div className="h-[5px] w-[1px] bg-gray-300 dark:bg-gray-500"></div>
                          )}
                        </div>
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
