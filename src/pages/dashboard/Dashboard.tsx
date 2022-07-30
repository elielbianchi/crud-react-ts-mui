import { FerramentasDeDetalhe } from '../../components';
import { LayoutBaseDePagina } from '../../layouts';

export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      titulo="Página inicial"
      barraDeFerramentas={<FerramentasDeDetalhe />}
    >
      Testando
    </LayoutBaseDePagina>
  );
};
