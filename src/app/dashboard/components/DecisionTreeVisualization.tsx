import { DecisionNode } from '@/app/types';

interface DecisionTreeVisualizationProps {
  tree: DecisionNode;
}

export default function DecisionTreeVisualization({ tree }: DecisionTreeVisualizationProps) {
  const renderNode = (node: DecisionNode, level: number = 0) => {
    const isWinning = node.isWinningPath;
    const isLeaf = node.type === 'leaf';
    
    return (
      <div key={node.id} className={`${level > 0 ? 'ml-8 mt-4' : ''}`}>
        <div
          className={`
            p-4 rounded-lg border-2 transition-all
            ${isWinning 
              ? 'bg-[#FF6B00]/10 border-[#FF6B00] shadow-lg' 
              : 'bg-[#0A0E27] border-[#8B92B0]/20'
            }
          `}
        >
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <div className={`font-bold ${isWinning ? 'text-[#FF6B00]' : 'text-[#C4C9D9]'}`}>
                {node.label}
              </div>
              <div className="text-sm text-[#8B92B0] mt-1">{node.reasoning}</div>
            </div>
            <div className={`
              ml-4 px-3 py-1 rounded-full text-sm font-semibold
              ${isWinning ? 'bg-[#FF6B00] text-white' : 'bg-[#151B3D] text-[#8B92B0]'}
            `}>
              {node.value} {node.type !== 'leaf' ? 'scenarios' : ''}
            </div>
          </div>
          
          {isWinning && isLeaf && (
            <div className="mt-3 pt-3 border-t border-[#FF6B00]/30">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <span className="text-sm font-semibold text-[#FF6B00]">Selected for Deployment</span>
              </div>
            </div>
          )}
        </div>
        
        {node.children && (
          <div className="relative">
            {node.children.map((child) => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="card">
      <h3 className="text-xl font-bold mb-4">Decision Path Visualization</h3>
      <p className="text-[#8B92B0] mb-6">
        How the AI narrowed down 1,000 scenarios to the winning workflow
      </p>
      
      <div className="overflow-x-auto">
        {renderNode(tree)}
      </div>
    </div>
  );
}