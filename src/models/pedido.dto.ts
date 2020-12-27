import { EnderecoDTO } from "./endereco.dto";
import { ItemPedidoDTO } from "./item-pedido.dto";
import { PagamentoDTO } from "./pagamento.dto";
import { RefDTO } from "./ref.dto";

export interface PedidoDTO {
    cliente: RefDTO;
    enderecoDeEntrega: EnderecoDTO;
    pagamento: PagamentoDTO;
    itens: ItemPedidoDTO;
}