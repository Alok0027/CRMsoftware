import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Develop new website for Acme Corp', value: '₹5,00,000' },
    'task-2': { id: 'task-2', content: 'Marketing campaign for Q3', value: '₹2,50,000' },
    'task-3': { id: 'task-3', content: 'Consulting services for Tech Solutions', value: '₹3,00,000' },
    'task-4': { id: 'task-4', content: 'Software license for Global Inc', value: '₹1,20,000' },
    'task-5': { id: 'task-5', content: 'Annual maintenance contract for Innovate LLC', value: '₹1,80,000' },
    'task-6': { id: 'task-6', content: 'Cloud migration for Future Systems', value: '₹4,50,000' },
    'task-7': { id: 'task-7', content: 'E-commerce platform for Retail Giant', value: '₹12,00,000' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'New',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Proposal Sent',
      taskIds: ['task-5'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Negotiation',
      taskIds: ['task-6'],
    },
    'column-4': {
        id: 'column-4',
        title: 'Won',
        taskIds: ['task-7'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};

const Deals = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setData(newState);
  };

  return (
    <main className="flex-1 p-6 sm:p-8 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Deals Pipeline</h1>
            <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition text-white font-medium shadow-sm hover:shadow-md">
            + Add Deal
            </button>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.columnOrder.map(columnId => {
                const column = data.columns[columnId];
                const tasks = column.taskIds.map(taskId => data.tasks[taskId]);

                return (
                <div key={column.id} className="bg-gray-50 rounded-lg p-4 flex flex-col">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4 px-2">{column.title}</h2>
                    <Droppable droppableId={column.id}>
                    {(provided, snapshot) => (
                        <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`flex-grow min-h-[100px] rounded-lg p-2 transition-colors ${snapshot.isDraggingOver ? 'bg-orange-100' : 'bg-gray-50'}`}>
                        {tasks.map((task, index) => (
                            <Draggable key={task.id} draggableId={task.id} index={index}>
                            {(provided, snapshot) => (
                                <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`p-4 mb-4 bg-white rounded-lg shadow-sm border border-gray-200 ${snapshot.isDragging ? 'shadow-lg' : ''}`}>
                                <p className="font-medium text-gray-800">{task.content}</p>
                                <p className="text-sm text-gray-500 mt-2">{task.value}</p>
                                </div>
                            )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                        </div>
                    )}
                    </Droppable>
                </div>
                );
            })}
            </div>
        </DragDropContext>
    </main>
  );
};

export default Deals;
