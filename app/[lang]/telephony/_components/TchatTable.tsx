import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const invoices = [
  {
    invoice: 'FACTURA001',
    paymentStatus: 'Completado',
    totalAmount: 'Últimas noticias sobre tecnología ',
    paymentMethod: 'Tarjeta Azul',
  },
  {
    invoice: 'FACTURA002',
    paymentStatus: 'En Proceso',
    totalAmount: 'Descubrimiento científico cambia el ',
    paymentMethod: 'Dinero Rápido',
  },
  {
    invoice: 'FACTURA003',
    paymentStatus: 'Pendiente',
    totalAmount: 'Elecciones nacionales generan ',
    paymentMethod: 'Transferencia Segura',
  },
  {
    invoice: 'FACTURA004',
    paymentStatus: 'Pagado',
    totalAmount: 'Evento deportivo sorprende a todos',
    paymentMethod: 'Tarjeta Verde',
  },
  {
    invoice: 'FACTURA005',
    paymentStatus: 'Finalizado',
    totalAmount: 'Nueva ley impacta la economía ',
    paymentMethod: 'Moneda Virtual',
  },
  {
    invoice: 'FACTURA006',
    paymentStatus: 'En Espera',
    totalAmount: 'Innovación en energía renovable',
    paymentMethod: 'Cheque Rápido',
  },
  {
    invoice: 'FACTURA007',
    paymentStatus: 'No Completado',
    totalAmount: 'Artista famoso lanza álbum ',
    paymentMethod: 'Transferencia Express',
  },
];

export default function TchatTable() {
  return (
    <div className="overflow-x-auto">
      <Table
        className="min-w-full table-fixed   text-lg rounded-tr-2xl rounded-tl-2xl border"
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;',
        }}
      >
        <TableHeader>
          <TableRow>
            <TableHead className="px-10 py-4 sm:py-5 lg:py-6 text-center rounded-tl-2xl bg-purple-600 text-white font-bold border-b border-gray-300 hover:bg-purple-700 transition-colors">
              Invoice
            </TableHead>
            <TableHead className="px-10 py-4 sm:py-5 lg:py-6 text-center bg-purple-600 text-white font-bold border-l border-b border-gray-300 hover:bg-purple-700 transition-colors">
              Status
            </TableHead>
            <TableHead className="px-10 py-4 sm:py-5 lg:py-6 text-center bg-purple-600 text-white font-bold border-l border-b border-gray-300 hover:bg-purple-700 transition-colors">
              Method
            </TableHead>
            <TableHead className="px-10 py-4 sm:py-5 lg:py-6 text-center rounded-tr-2xl bg-purple-600 text-white font-bold border-l border-b border-gray-300 hover:bg-purple-700 transition-colors">
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {invoices.map((invoice) => (
            <TableRow
              key={invoice.invoice}
              className="hover:bg-gray-50 transition-colors"
            >
              <TableCell className="px-10 md:py-5 lg:py-6 border-b border-gray-300 font-medium">
                {invoice.invoice}
              </TableCell>
              <TableCell className="px-10 md:py-5 lg:py-6 border-l border-b border-gray-300">
                {invoice.paymentStatus}
              </TableCell>
              <TableCell className="px-10 md:py-5 lg:py-6 border-l border-b border-gray-300">
                {invoice.paymentMethod}
              </TableCell>
              <TableCell className="px-5 md:py-5 lg:py-6 border-l border-b border-gray-300 text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
