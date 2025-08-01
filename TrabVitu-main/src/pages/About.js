import { Box, Typography } from "@mui/material";
import dinheiro from "../assets/dinheiros.png";
import lucro from "../assets/lucro.png";
import cartao from "../assets/cartao.png";

const About = () => {
  return (
    <Box>
      <Box
        position="absolute"
        top={65}
        left="50%"
        sx={{ transform: "translateX(-50%)", textAlign: "center" }}
      >
        <Typography variant="h4" component="h1">
          Sobre o Sistema
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={4}
        minHeight="100vh"
      >
        <Box
          position="absolute"
          top={100}
          left="50%"
          sx={{
            transform: "translateX(-50%)",
            maxWidth: "800px",
            padding: "16px",
            textAlign: "justify",
            lineHeight: 1.6,
          }}
        >
          <Typography variant="body1" fontFamily="Arial" color="#333">
            Este sistema foi criado para ajudar pessoas que desejam ter maior
            controle e organização da sua vida financeira. Com ele, é possível
            acompanhar de forma clara para onde o seu dinheiro está indo,
            identificar gastos mensais e detectar despesas desnecessárias. O
            objetivo é oferecer uma visão completa das finanças pessoais,
            promovendo economia e tomada de decisões mais conscientes.
          </Typography>

          <Box mt={3} display="flex" alignItems="flex-start" gap={2}>
            <img
              src={dinheiro}
              alt="Imagem de dinheiro"
              style={{ width: "80px", marginTop: "4px" }}
            />
            <Typography variant="body1" fontFamily="Arial" color="#333">
              Guardar dinheiro é o primeiro passo para alcançar estabilidade
              financeira e segurança em imprevistos. Ter uma reserva permite
              mais tranquilidade, liberdade de escolha e preparação para
              oportunidades futuras, como investimentos ou emergências. Mesmo
              valores pequenos, quando poupados com regularidade, geram
              resultados significativos ao longo do tempo.
            </Typography>
          </Box>

          <Box mt={3} display="flex" alignItems="flex-start" gap={2}>
            <img
              src={lucro}
              alt="Imagem do lucro"
              style={{ width: "80px", marginTop: "4px" }}
            />
            <Typography variant="body1" fontFamily="Arial" color="#333">
              Anotar os gastos é essencial para entender para onde seu dinheiro
              está indo. Esse hábito revela desperdícios, mostra padrões de
              consumo e ajuda na tomada de decisões conscientes. Sem esse
              controle, é fácil gastar mais do que se ganha e cair em dívidas.
            </Typography>
          </Box>

          <Box mt={3} display="flex" alignItems="flex-start" gap={2}>
            <img
              src={cartao}
              alt="Imagem do cartão"
              style={{ width: "80px", marginTop: "4px" }}
            />
            <Typography variant="body1" fontFamily="Arial" color="#333">
              O cartão de crédito pode ser um aliado ou um vilão, dependendo do
              uso. Sem controle, ele facilita o endividamento e cria a falsa
              impressão de que há mais dinheiro disponível do que realmente
              existe. Usá-lo com responsabilidade significa conhecer os limites,
              evitar parcelamentos desnecessários e pagar sempre a fatura
              completa.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
