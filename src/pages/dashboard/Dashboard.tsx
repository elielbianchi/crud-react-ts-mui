import { BarraDeFerramentas } from '../../components';
import { LayoutBaseDePagina } from '../../layouts';

export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      titulo="Página inicial"
      barraDeFerramentas={<BarraDeFerramentas mostrarInputBusca />}
    >
      Testando
    </LayoutBaseDePagina>
  );
};
