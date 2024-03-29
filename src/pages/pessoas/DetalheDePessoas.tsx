import { useNavigate, useParams } from 'react-router-dom';

import { FerramentasDeDetalhe } from '../../components';
import { LayoutBaseDePagina } from '../../layouts';

export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>();
  const navigate = useNavigate();

  const handleSave = () => {
    console.log('Save');
  };

  const handleDelete = () => {
    console.log('Delete');
  };

  return (
    <LayoutBaseDePagina
      titulo="Detalhe de pessoa"
      barraDeFerramentas={
        <FerramentasDeDetalhe
          textoBotaoNovo="Nova"
          mostrarBotaoSalvarEFechar
          mostrarBotaoNovo={id !== 'nova'}
          mostrarBotaoApagar={id !== 'nova'}
          
          aoClicarEmSalvar={handleSave}
          aoClicarEmSalvarEFechar={handleSave}
          aoClicarEmApagar={handleDelete}
          aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
          aoClicarEmVoltar={() => navigate('/pessoas')}
        />
      }
    >
      <p>Detalhe de Pessoas: {id} </p>
    </LayoutBaseDePagina>
  );
};
